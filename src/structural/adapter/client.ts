import {
  EmailValidatorFnProtocol,
  EmailValidatorProtocol,
} from './validation/email-validator-protocol';
import { EmailValidatorClassAdapter } from './validation/email-validator-class-adapter';
import { emailValidatorFnAdapter } from './validation/email-validator-fn-adapter';

const emailToVerify = 'fulano@email.com';

function validateEmailClass(
  emailValidator: EmailValidatorProtocol,
  email: string,
): void {
  if (emailValidator.isEmail(email)) console.log('Email is valid (CLASS)');
  else console.log('Email is invalid (CLASS)');
}

validateEmailClass(new EmailValidatorClassAdapter(), emailToVerify);

function validateEmailFunction(
  emailValidator: EmailValidatorFnProtocol,
  email: string,
): void {
  if (emailValidator(email)) console.log('Email is valid (FN)');
  else console.log('Email is invalid (FN)');
}

validateEmailFunction(emailValidatorFnAdapter, emailToVerify);
