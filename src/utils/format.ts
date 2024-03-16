export function padZeros(minutes: number): string {
    return minutes.toString().padStart(2, '0');
}
