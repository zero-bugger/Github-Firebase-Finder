import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { NgForm} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import {ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private auth:AuthService,
			  private router:Router,
			  private toastr:ToastrService) {
  
  
  		}

  ngOnInit(): void {
  }
	
	onSubmit(f:NgForm){
		const {email,password} = f.form.value;
		this.auth.signUp(email,password)
		.then((res)=>{
			this.router.navigateByUrl('/');
			this.toastr.success("Sign Up Success");
		})
		.catch((err)=>{
			console.log(err);
			this.toastr.error(err);
		})
	}

}
