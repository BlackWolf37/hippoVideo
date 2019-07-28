import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  platformObj: string[];
  topFeaturesObj: string[];
  resourcesObj: string[];
  companyInfoObj: string[];
  constructor() { }

  ngOnInit() {
    this.platformObj = [
      'Video Actions',
      'Video hosting',
      'Video Creation + Widget',
      'Video Editing',
      'Video Sharing',
      'Video Analytics',
      'Video customization',
      'Video subtitles',
      'Video engagement',
      'User management',
      'Mail Merge'
    ];
    this.topFeaturesObj = [
      'Branding',
      'Sales pitch S',
      'Sales Funnel S',
      'Lead Generation M',
      'Email Campaigns S',
      'Audience Demographics',
      'Integrations'
    ];
    this.resourcesObj = [
      'Case studies',
      'Product support',
      'FAQ',
      'Hippo Video Blog'
    ];
    this.companyInfoObj = [
      'About us',
      'Contact us',
      'Lyceum Technologies Inc',
      '2035 Sunset lake road, Suite',
      'B-2, Newark, Delaware, 19702',
      '+1 855 910 6999',
      'support@hippovideo.io',
    ]
  }

}
