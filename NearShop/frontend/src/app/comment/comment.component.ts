import { Component, Input, OnInit } from '@angular/core';
import axios from "axios";
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comments:any=[]
  description: any=""
  data:any= []
  token:any=localStorage.getItem("token")
  @Input() product_id:any
  constructor() { }

  ngOnInit(): void {
    this.getCommentsbyProductId();
    
    axios
      .get("http://localhost:3000/api/users/user", {
        headers: { token:this.token },
      })
      .then((res:any) => {
        // console.log(res.data.user)
        this.data = res.data.user;
        console.log(this.data);
      })
      .then((res:any) => {
        console.log(res.user_id, "heee");
      })
      .catch((error:any) => {
        console.log(error);
      });
  }
  async getCommentsbyProductId() {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/comments/${this.product_id}`
      );
      console.log(response.data);
      this.comments = response.data;
      this.description = "";
      // this.$router.push("/");
    } catch (err) {
      console.log(err);
    }
  }
  async deleteComment(_id:any) {
    try {
      await axios.delete(
        `http://localhost:3000/api/comments/deleteComment/${_id}`
      );
      this.getCommentsbyProductId();
    } catch (err) {
      console.log(err);
    }
  }
  async saveComment() {
    try {
      await axios.post("http://localhost:3000/api/comments/addComment", {
        description: this.description,
        product_id: this.product_id,
        user_id: this.data.id,
      });
      this.description = "";
      this.getCommentsbyProductId();
      // this.$router.push("/");
    } catch (err) {
      console.log(err);
    }
  }

}
