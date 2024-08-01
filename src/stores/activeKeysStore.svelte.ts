import type { Modifier, App } from 'obsidian'
import { convertKeyToOS, getModifierInfo } from '../utils/modifierUtils'
import { sortModifiers } from '../utils/modifierUtils'
import type { VisualKeyboardManager } from '../managers/visualKeyboardManager.svelte'
import HotkeyManager from '../managers/hotkeyManager.svelte'

export class ActiveKeysStore {
  private app: App
  private hotkeyManager: HotkeyManager
  private visualKeyboardManager: VisualKeyboardManager
  private recognizedModifiers: Set<string>

  activeKey = $state('')
  activeModifiers: Modifier[] = $state([])

  constructor(app: App, visualKeyboardManager: VisualKeyboardManager) {
    this.app = app
    this.hotkeyManager = HotkeyManager.getInstance(app)
    this.visualKeyboardManager = visualKeyboardManager
    this.recognizedModifiers = getModifierInfo().recognized
  }

  get ActiveKey() {
    return this.activeKey
  }

  set ActiveKey(key: string) {
    this.activeKey = key
  }

  get ActiveModifiers() {
    return this.activeModifiers
  }

  set ActiveModifiers(modifiers: Modifier[]) {
    this.activeModifiers = modifiers
  }

  get state() {
    return {
      activeKey: this.activeKey,
      activeModifiers: this.activeModifiers,
    }
  }

  set state(newState: { activeKey: string; activeModifiers: Modifier[] }) {
    this.activeKey = newState.activeKey
    this.activeModifiers = newState.activeModifiers
  }

  public reset() {
    this.activeKey = ''
    this.activeModifiers = []
  }

  public handleKeyClick(keyCode: string) {
    const specialKey = this.visualKeyboardManager.layout.specialKeys[keyCode]
    let keyLabel = specialKey ? specialKey.label : keyCode

    // Convert to OS-specific key
    keyLabel = convertKeyToOS(keyLabel)

    if (this.recognizedModifiers.has(keyLabel)) {
      this.toggleModifier(keyLabel as Modifier)
    } else {
      this.activeKey = this.activeKey === keyCode ? '' : keyCode
    }
  }

  public handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Backspace') {
      if (this.activeKey !== '') {
        this.activeKey = ''
      } else if (this.activeModifiers.length > 0) {
        this.activeModifiers = this.activeModifiers.slice(0, -1)
      }
      return
    }

    const keyCode = e.code
    this.handleKeyClick(keyCode)
  }

  private toggleModifier(modifier: Modifier) {
    if (this.activeModifiers.includes(modifier)) {
      this.activeModifiers = this.activeModifiers.filter(
        (mod) => mod !== modifier
      )
    } else {
      this.activeModifiers = [...this.activeModifiers, modifier]
    }
  }

  public handlePhysicalKeyDown(e: KeyboardEvent) {
    let keyLabel = convertKeyToOS(e.key)

    if (this.recognizedModifiers.has(keyLabel)) {
      this.toggleModifier(keyLabel as Modifier)
    }
  }

  public getDisplayKey() {
    const specialKey =
      this.visualKeyboardManager.layout.specialKeys[this.activeKey]
    if (specialKey) {
      return specialKey.unicode || specialKey.label
    }
    return this.activeKey.length === 1
      ? this.activeKey.toUpperCase()
      : this.activeKey
  }

  sortedModifiers = $derived(sortModifiers(this.activeModifiers))
}

export default function createActiveKeysStore(
  app: App,
  visualKeyboardManager: VisualKeyboardManager
): ActiveKeysStore {
  return new ActiveKeysStore(app, visualKeyboardManager)
}
