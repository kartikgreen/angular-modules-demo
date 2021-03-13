import { DOCUMENT } from "@angular/common";
import { inject, InjectionToken } from "@angular/core";

export const WINDOW = new InjectionToken<Window>(
  "Window object",
  {
    factory: () => {
      const defaultView = inject(DOCUMENT).defaultView;

      if (!defaultView) {
        throw new Error("Window is not available");
      }

      return defaultView;
    }
  }
);
