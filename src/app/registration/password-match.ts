import { FormGroup } from '@angular/forms';
export function passwordMatch(control: FormGroup):{[key: string]: boolean}  {
    const pwd = control.get('pwd');
    // If FormControl objects don't exist, return null
    const confirmPwd = control.get('confirmPwd');
    if (!pwd || !confirmPwd) return null;

    //If they are indeed equal, return null
    if (pwd.value === confirmPwd.value) {
        return null;
      }
      //Else return false
   return {
    mismatch: true };
 
   }