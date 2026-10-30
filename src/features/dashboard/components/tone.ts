/*
 * SPDX-FileCopyrightText: 2020 Stalwart Labs LLC <hello@stalw.art>
 *
 * SPDX-License-Identifier: LicenseRef-SEL
 */

import type { Tone } from '../types/schema';
import type { DeltaSentiment } from '../helpers';

interface ToneClasses {
  surface: string;
  badge: string;
  muted: string;
  track: string;
  accentColor: string | undefined;
  sentiment: Record<DeltaSentiment, string>;
}

const TONES: Record<Tone | 'default', ToneClasses> = {
  default: {
    surface: '',
    badge: 'bg-highlight text-highlight-foreground',
    muted: 'text-muted-foreground',
    track: 'bg-muted',
    accentColor: undefined,
    sentiment: {
      good: 'bg-success-soft text-success',
      bad: 'bg-destructive-soft text-destructive',
      neutral: 'bg-muted text-muted-foreground',
    },
  },
  flat: {
    surface: 'bg-muted shadow-none',
    badge: 'bg-card text-highlight-foreground',
    muted: 'text-muted-foreground',
    track: 'bg-card',
    accentColor: undefined,
    sentiment: {
      good: 'bg-card text-success',
      bad: 'bg-card text-destructive',
      neutral: 'bg-card text-muted-foreground',
    },
  },
  accent: {
    surface: 'bg-highlight shadow-none',
    badge: 'bg-card text-highlight-foreground',
    muted: 'text-foreground/70',
    track: 'bg-card',
    accentColor: undefined,
    sentiment: {
      good: 'bg-card text-success',
      bad: 'bg-card text-destructive',
      neutral: 'bg-card text-muted-foreground',
    },
  },
  ink: {
    surface: 'bg-ink text-ink-foreground shadow-ink',
    badge: 'bg-ink-2 text-ink-accent',
    muted: 'text-ink-muted',
    track: 'bg-ink-2',
    accentColor: 'var(--ink-accent)',
    sentiment: {
      good: 'bg-ink-success/15 text-ink-success',
      bad: 'bg-ink-danger/15 text-ink-danger',
      neutral: 'bg-ink-2 text-ink-muted',
    },
  },
};

export function toneClasses(tone: Tone | undefined): ToneClasses {
  return TONES[tone ?? 'default'];
}
