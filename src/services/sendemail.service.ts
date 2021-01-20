
import { Global } from './../config/global.config';
import * as nodemailer from 'nodemailer'; 
import SMTPTransport from 'nodemailer/lib/smtp-transport';
 
export class SendMailService { 
  private _transporter: nodemailer.Transporter; 

  constructor() { 
      
    let server = Global.getParam('smtp.server') as string;
    
    let port = Global.getParam('smtp.port') as number;
    let username = Global.getParam('smtp.user') as string;
    let pwd = Global.getParam('smtp.pwd') as string;

    let smtp = new SMTPTransport({
       host: server ,
       port: port,
       auth: {
           user: username,
           pass: pwd
       }
    });

    this._transporter = nodemailer.createTransport(smtp); 
  } 
  
  sendMail(to: string, subject: string, content: string,from?: string) { 
    let sender = Global.getParam('smtp.from') as string;
    if(!from){
        from = sender;
    }
    let options = { 
      from: from, 
      to: to, 
      subject: subject, 
      html: content 
    } 


    this._transporter.sendMail(  
      options, (error, info) => { 
        if (error) { 
          return console.log(`error: ${error}`); 
        } 
        console.log(`Message Sent ${info.response}`); 
      }); 
  } 
} 
