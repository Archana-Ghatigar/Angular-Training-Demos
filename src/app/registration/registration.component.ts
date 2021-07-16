import { Component, OnInit } from '@angular/core';
import { User } from './User';
import { FormControl, Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { passwordMatch } from './password-match';
import { UserService } from '../user.service';
import { codeValidation } from './codevalidator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  private user: User;
  signupForm: FormGroup;
  keywords = new Array<string>();
  constructor(private fb:FormBuilder,private userservice:UserService) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(6)]),
      code: new FormControl('',[Validators.required,codeValidation]),
      country: new FormControl('',[Validators.required]),
      terms: new FormControl('',[Validators.required])
    })
    
    /*this.signupForm  = this.fb.group({
      email: ['',[Validators.required,Validators.email]],
      password: this.fb.group({
          pwd: ['', [Validators.required, 
                     Validators.minLength(3)]],
          confirmPwd: ['', [Validators.required,
                            Validators.minLength(3)]]
      },{ validator: passwordMatch }),
      gender: ['', Validators.required],
      terms: ['', Validators.requiredTrue]
  })*/
  this.signupForm.get('country').valueChanges.subscribe(keyword=>{
    this.keywords.push(keyword);
  });
  }
  
  get email() { return this.signupForm.get('email'); }
  get code() { return this.signupForm.get('code'); }
  get password() { return this.signupForm.get('password'); }
 
  get gender() { return this.signupForm.get('gender'); }

  get terms() { return this.signupForm.get('terms'); }

  public onFormSubmit() {
    if(this.signupForm.valid) {
        this.user = this.signupForm.value;
        console.log(this.user);
        /* Any API call logic via services goes here */
        this.userservice.addUser(this.user).subscribe(response=>{
          window.alert('Your form is submitted and new user id is'+response.id);
          this.signupForm.reset();
        });        
    }
}
}
