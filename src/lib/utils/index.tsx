/**
 * Utils class containing utility methods.
 */
export class Utils {
  /**
   * Format the given number as currency in Indonesian Rupiah (IDR).
   * @param amount The number to format as currency.
   * @returns A string representing the formatted currency in IDR.
   */
  // Utility function to format time in seconds to MM:SS format
  static formatTime(time: number): string {
    /**
     * Formats time in seconds to MM:SS format.
     * @param {number} time - Time in seconds.
     * @returns {string} - Formatted time string in MM:SS format.
     */
    const minutes: number = Math.floor(time / 60)
    const seconds: number = time % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`
  }
}
