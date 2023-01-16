export class Channel {
  description: string;
  name: string;
  user: string;

  constructor(obj?: any) {
    // das Fragezeichen als optionales Argument und kann daher auch ohne obj verwendet werden
    this.description = obj ? obj.description : ''; // obj = wenn es exestiert dann wird obj.firstName übergeben, wenn nicht dann '' (leerer string)
    this.name = obj ? obj.name : '';
    this.user = obj ? obj.user : '';
  }

  public toJSON() {
    return {
      description: this.description,
      name: this.name,
      user: this.user,
    };
  }
}
