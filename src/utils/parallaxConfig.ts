import { Adaptive } from '@hooks/adaptiveScreenSize';

export enum Pages {
  object1 = 'OBJECT1',
  object2 = 'OBJECT2',
  object3 = 'OBJECT3',
}

export interface PageConfig {
  speed: number;
  offset: number;
}

export interface LayoutConfig {
  pages: number;
}

export const ParallaxConfig: Record<
  Adaptive,
  Record<Pages, PageConfig> & LayoutConfig
> = {
  [Adaptive.mobile]: {
    pages: 3,
    [Pages.object1]: {
      speed: 0.4,
      offset: 0.47,
    },
    [Pages.object2]: {
      speed: 0.5,
      offset: 0.495,
    },
    [Pages.object3]: {
      speed: 0.75,
      offset: 0.5,
    },
  },
  [Adaptive.xs]: {
    pages: 3,
    [Pages.object1]: {
      speed: 0.4,
      offset: 0.44,
    },
    [Pages.object2]: {
      speed: 0.5,
      offset: 0.495,
    },
    [Pages.object3]: {
      speed: 0.75,
      offset: 0.5,
    },
  },

  [Adaptive.s]: {
    pages: 3,
    [Pages.object1]: {
      speed: 0.4,
      offset: 0.44,
    },
    [Pages.object2]: {
      speed: 0.5,
      offset: 0.495,
    },
    [Pages.object3]: {
      speed: 0.65,
      offset: 0.5,
    },
  },
  [Adaptive.m]: {
    pages: 3,
    [Pages.object1]: {
      speed: 0.4,
      offset: 0.44,
    },
    [Pages.object2]: {
      speed: 0.5,
      offset: 0.495,
    },
    [Pages.object3]: {
      speed: 0.65,
      offset: 0.5,
    },
  },
  [Adaptive.l]: {
    pages: 3,
    [Pages.object1]: { speed: 0.4, offset: 0.43 },
    [Pages.object2]: {
      speed: 0.5,
      offset: 0.495,
    },
    [Pages.object3]: {
      speed: 0.65,
      offset: 0.5,
    },
  },
  [Adaptive.xl]: {
    pages: 3,
    [Pages.object1]: { speed: 0.4, offset: 0.42 },
    [Pages.object2]: {
      speed: 0.5,
      offset: 0.495,
    },
    [Pages.object3]: {
      speed: 0.65,
      offset: 0.5,
    },
  },
  [Adaptive.xxl]: {
    pages: 3,
    [Pages.object1]: { speed: 0.4, offset: 0.38 },
    [Pages.object2]: {
      speed: 0.5,
      offset: 0.495,
    },
    [Pages.object3]: {
      speed: 0.65,
      offset: 0.5,
    },
  },
};
