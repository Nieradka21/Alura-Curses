import { transition, trigger } from "@angular/animations";

export const fade = trigger(
    'fade',
    [
        transition(
            ':enter',
            []
        )
    ]
);