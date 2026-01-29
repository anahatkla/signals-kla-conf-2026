export class DateUtility {
  public static calculateAge(date: Date): number {
    const today = new Date();
    const birthDate = new Date(date);

    let age = today.getFullYear() - birthDate.getFullYear();
    const months = today.getMonth() - birthDate.getMonth();

    if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }
}
