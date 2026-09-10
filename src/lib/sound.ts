// Sound system removed per DESIGN.md §7 & §20.
// All sound calls across components are no-ops.

const noop = () => {};

export const soundFx = {
  playClick: noop,
  playHover: noop,
  playBeep: noop,
  toggleSound: () => false,
  isEnabled: () => false,
};
