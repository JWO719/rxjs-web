/**
 * A generic notification type for rxjs-web
 */
export interface ObserverNotification<T = any, O = any> {
  /**
   * An array of entries returned from the notification API
   */
  entries: ReadonlyArray<T> | Readonly<T>;
  /**
   * The Observer from the notification API
   */
  observer: Readonly<O>
}
