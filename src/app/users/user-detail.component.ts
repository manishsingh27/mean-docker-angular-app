import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './user.service';
import { IUser } from './user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  pageTitle = 'User Detail';
  errorMessage = '';
  user: IUser | undefined;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private userService: UserService) {
  }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getUser(id);
    }
  }

  getUser(id: number) {
    this.userService.getById(id).subscribe(
      user => {
        this.user = user},
      error => this.errorMessage = <any>error);
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

  onBack(): void {
    this.router.navigate(['/users']);
  }

}
