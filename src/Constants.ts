// src/Constants.ts

import type {
  KeyboardLayout,
  KeyboardSection,
  Key,
  PluginSettings,
  FilterSettings,
} from './interfaces/Interfaces'

export const VIEW_TYPE_SHORTCUTS_ANALYZER = 'keyboard-shortcuts-visualization'

export const DEFAULT_FILTER_SETTINGS: FilterSettings = {
  FeaturedFirst: false,
  StrictSearch: false,
  HighlightCustom: false,
  HighlightDuplicates: false,
  DisplayWOhotkeys: false,
  DisplayIDs: false,
}

export const DEFAULT_PLUGIN_SETTINGS: PluginSettings = {
  showStatusBarItem: true,
  filterSettings: DEFAULT_FILTER_SETTINGS,
  featuredCommandIDs: [],
}

// Unified Keyboard Layout Object
export const UNIFIED_KEYBOARD_LAYOUT: KeyboardLayout = {
  sections: [
    {
      name: 'main',
      gridRatio: 3.75,
      rows: [
        [
          { label: 'Escape', code: 'Escape', unicode: '⎋' },
          { label: 'empty', width: 0.5 },
          { label: 'F1' },
          { label: 'F2' },
          { label: 'F3' },
          { label: 'F4' },
          { label: 'empty', width: 0.75 },
          { label: 'F5' },
          { label: 'F6' },
          { label: 'F7' },
          { label: 'empty', width: 0.75 },
          { label: 'F8' },
          { label: 'F9' },
          { label: 'F10' },
          { label: 'F11' },
          { label: 'F12' },
        ],
        [
          { label: '`', code: 'Backquote' },
          { label: '1' },
          { label: '2' },
          { label: '3' },
          { label: '4' },
          { label: '5' },
          { label: '6' },
          { label: '7' },
          { label: '8' },
          { label: '9' },
          { label: '0' },
          { label: '-', code: 'Minus' },
          { label: '=', code: 'Equal' },
          { label: 'Backspace', code: 'Backspace', width: 2, unicode: '⌫' },
        ],
        [
          { label: 'Tab', width: 1.5 },
          { label: 'Q' },
          { label: 'W' },
          { label: 'E' },
          { label: 'R' },
          { label: 'T' },
          { label: 'Y' },
          { label: 'U' },
          { label: 'I' },
          { label: 'O' },
          { label: 'P' },
          { label: '[' },
          { label: ']' },
          { label: '\\', code: 'Backslash', width: 1.5 },
        ],
        [
          { label: 'CapsLock', width: 1.75 },
          { label: 'A' },
          { label: 'S' },
          { label: 'D' },
          { label: 'F' },
          { label: 'G' },
          { label: 'H' },
          { label: 'J' },
          { label: 'K' },
          { label: 'L' },
          { label: ';' },
          { label: "'" },
          { label: 'Enter', width: 2.25 },
        ],
        [
          { label: 'Shift', width: 2.25 },
          { label: 'Z' },
          { label: 'X' },
          { label: 'C' },
          { label: 'V' },
          { label: 'B' },
          { label: 'N' },
          { label: 'M' },
          { label: ',' },
          { label: '.' },
          { label: '/' },
          { label: 'Shift', width: 2.75 },
        ],
        [
          { label: 'Control', width: 1.5 },
          { label: 'Meta', unicode: '⌘', width: 1.5 },
          { label: 'Alt', width: 1.5 },
          { label: ' ', code: 'Space', unicode: '⎵', width: 6 },
          { label: 'Alt', width: 1.5 },
          { label: 'Meta', width: 1.5 },
          { label: 'Control', width: 1.5 },
        ],
      ],
    },
    {
      name: 'other',
      gridRatio: 0.75,
      rows: [
        [{ label: 'empty' }, { label: 'empty' }, { label: 'empty' }],
        [
          { label: 'Insert', smallText: true },
          { label: 'Home', smallText: true },
          { label: 'PageUp', smallText: true },
        ],
        [
          { label: 'Delete', smallText: true },
          { label: 'End', smallText: true },
          { label: 'PageDown', smallText: true },
        ],
        [{ label: 'empty' }, { label: 'empty' }, { label: 'empty' }],
        [
          { label: 'empty' },
          { label: 'ArrowUp', code: 'ArrowUp' },
          { label: 'empty' },
        ],
        [
          { label: 'ArrowLeft', code: 'ArrowLeft' },
          { label: 'ArrowDown', code: 'ArrowDown' },
          { label: 'ArrowRight', code: 'ArrowRight' },
        ],
      ],
    },
    {
      name: 'num',
      gridRatio: 1,
      rows: [
        [
          { label: 'empty' },
          { label: 'empty' },
          { label: 'empty' },
          { label: 'empty' },
        ],
        [
          { label: 'NumLock', code: 'NumLock', unicode: '⇭' },
          { label: '/', code: 'NumpadDivide' },
          { label: '*', code: 'NumpadMultiply', unicode: '×' },
          { label: '-', code: 'NumpadSubtract' },
        ],
        [
          { label: '7', code: 'Numpad7' },
          { label: '8', code: 'Numpad8' },
          { label: '9', code: 'Numpad9' },
          { label: '+', code: 'NumpadAdd', height: 2 },
        ],
        [
          { label: '4', code: 'Numpad4' },
          { label: '5', code: 'Numpad5' },
          { label: '6', code: 'Numpad6' },
        ],
        [
          { label: '1', code: 'Numpad1' },
          { label: '2', code: 'Numpad2' },
          { label: '3', code: 'Numpad3' },
          { label: 'Enter', code: 'Enter', height: 2 },
        ],
        [
          { label: '0', code: 'Numpad0', width: 2 },
          { label: '.', code: 'NumpadDecimal' },
        ],
      ],
    },
  ],
  specialKeys: {
    Meta: { label: 'Meta', code: 'Meta', unicode: '⌘' },
    Control: { label: 'Control', code: 'Control', unicode: 'Ctrl' },
    Alt: { label: 'Alt', code: 'Alt', unicode: '⌥' },
    Shift: { label: 'Shift', code: 'Shift', unicode: '⇧' },
    ArrowLeft: { label: 'ArrowLeft', code: 'ArrowLeft', unicode: '←' },
    ArrowUp: { label: 'ArrowUp', code: 'ArrowUp', unicode: '↑' },
    ArrowRight: { label: 'ArrowRight', code: 'ArrowRight', unicode: '→' },
    ArrowDown: { label: 'ArrowDown', code: 'ArrowDown', unicode: '↓' },
  },
}
