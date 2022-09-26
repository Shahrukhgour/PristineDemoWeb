import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AppService} from  '../app/app.service';

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent implements OnInit {
    ngOnInit(): void {};
    DemoUser: FormGroup;
    constructor(private toast: ToastrService,
                private formBuilder: FormBuilder,
                private appService: AppService) {
        this.DemoUser=formBuilder.group({
            name:['',Validators.required],
            phone:['',Validators.required],
            gmail:['',[Validators.email,Validators.required]],
            company:['',Validators.required],
            message:[''],
        });
    }
    clientData(){
        const json={
            name:this.DemoUser.get('name').value,
            phone:this.DemoUser.get('phone').value,
            email:this.DemoUser.get('gmail').value,
            company:this.DemoUser.get('company').value,
            message:this.DemoUser.get('message').value,
        };
        this.appService.getConfig(json).subscribe((result: any) => {
            if(result[0].condition.toLowerCase() == 'true'){
                console.log(result)
                this.toast.success('We Will Call You Shortly.','Thank You.');
            }
            if(result[0].condition.toLowerCase() == 'false'){
                this.toast.error('There are some problem.');
            }
        });
        this.DemoUser.get('name').reset(),
        this.DemoUser.get('phone').reset(),
        this.DemoUser.get('gmail').reset(),
        this.DemoUser.get('company').reset(),
        this.DemoUser.get('message').reset();
    };

    hoemTage: boolean=true;
    servicesTag: boolean=false;
    aboutTag: boolean=false;
    industryTag: boolean=false;
    contect_usTag: boolean=false;
    partners_tag: boolean=false;
    scrollTo(ele: HTMLElement){
        ele.scrollIntoView({behavior:'smooth'});
    }
    colorChange(event: any){
        console.log(event.target.value)
        if (event.target.value=='services'){
            this.servicesTag=true;
            this.hoemTage=false;
            this.aboutTag=false;
            this.industryTag=false;
            this.contect_usTag=false;
            this.partners_tag=false;
        }
        else if(event.target.value=='about'){
            this.servicesTag=false;
            this.hoemTage=false;
            this.aboutTag=true;
            this.industryTag=false;
            this.contect_usTag=false;
            this.partners_tag=false;
        }
        else if(event.target.value=='industry'){
            this.servicesTag=false;
            this.hoemTage=false;
            this.aboutTag=false;
            this.industryTag=true;
            this.contect_usTag=false;
            this.partners_tag=false;
        }
        else if(event.target.value=='contect_us'){
            this.servicesTag=false;
            this.hoemTage=false;
            this.aboutTag=false;
            this.industryTag=false;
            this.contect_usTag=true;
            this.partners_tag=false;
        }
        else if(event.target.value=='home'){
            this.servicesTag=false;
            this.hoemTage=true;
            this.aboutTag=false;
            this.industryTag=false;
            this.contect_usTag=false;
            this.partners_tag=false;
        }
        else if(event.target.value=='partner'){
            this.servicesTag=false;
            this.hoemTage=false;
            this.aboutTag=false;
            this.industryTag=false;
            this.contect_usTag=false;
            this.partners_tag=true;
        }
    }
}
