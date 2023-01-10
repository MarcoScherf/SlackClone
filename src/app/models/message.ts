export class Message {
  text: string;
  user: string;
  time: number;
  comments: number;

  constructor(obj?: any) {
    // das Fragezeichen als optionales Argument und kann daher auch ohne obj verwendet werden
    this.text = obj ? obj.text : ''; // obj = wenn es exestiert dann wird obj.firstName übergeben, wenn nicht dann '' (leerer string)
    this.user = obj ? obj.user : '';
    this.time = obj ? obj.time : 0;
    this.comments = obj ? obj.comments : 0;
  }

  public toJSON() {
    return {
      text: this.text,
      user: this.user,
      time: this.time,
      comments: this.comments,
    };
  }
}
