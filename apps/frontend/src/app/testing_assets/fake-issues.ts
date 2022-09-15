import { formatDate } from '@angular/common';
import { Issue, User } from '../issues-list/issues.model';

export const longIssue: Issue = {
  title: 'title',
  body: '#'.repeat(301),
  user: {
    login: 'anonymous',
  },
  number: 1,
  created_at: '2011-04-10T20:09:31Z',
  html_url: 'https://api.github.com/repos/octocat/Hello-World/issues/1347',
};

export const shortIssue: Issue = {
  title: 'title',
  body: 'a',
  user: {
    login: 'anonymous',
  },
  number: 1,
  created_at: '2011-04-10T20:09:31Z',
  html_url: 'https://api.github.com/repos/octocat/Hello-World/issues/1347',
};

export const fakeIssues: Issue[] = [
  {
    title: 'Update 104-datastructures.md',
    body: 'Added content in the Java roadmap to learn Data Structures and Algorithms.',
    user: {
      login: 'anonymous',
    },
    number: 123456,
    created_at: '2011-04-10T20:09:31Z',
    html_url: 'https://api.github.com/repos/octocat/Hello-World/issues/1347',
  },

  {
    title: 'Textual markup of a cybersecurity roadmap',
    body: "This might be a possible duplicate of another issue, but not sure. I've used these roadmaps for a while and figured I'd contribute in some way to give back since I noticed it was expanding away from just development. Please let me know if I need to go back and add anything to this or if anything needs changing ## Cyber Security Learning Roadmap ### Fundamental IT skills - Understanding hardware components and how they work together in a computer - Understand different connection types and how they function - Examples include: bluetooth, IR, NFC - Understand basic OS-independent troubleshooting steps and terms - Understand basic configuration and function of popular suites - iCloud, Google Suite, Microsoft Office Suite - Understand basics of computer networking (expanded on in networking section) #### Windows OS - Understand how to install and configure Windows - Understand key differences between Windows versions - Understand groups and their differences - Understand permissions - Understand installing software and applications - Understand how to perform CRUD operations on files - Understand how to navigate Windows in both the GUI and CLI - Understand how to perform troubleshooting and use common Windows tools and services - Understand common commands #### Linux OS - Understand basic differences between Linux distro families - Debian, Fedora, RedHat - Understand key differences between various popular distros (e.g. Ubuntu, RHEL, CentOS) - Understand how to install and configure Linux - Understand groups and permissions - Understand how to perform CRUD operations on files - Understand installing software and applications - Understand basic troubleshooting and common tools and services - Understand common directories and their structures and uses - Understand how to navigate Linux in both the GUI and CLI - Understand common commands #### [Optional] Mac OS - Understand installing and configuring Mac OS - Understand file structure and permissions - Understand how to perform CRUD operations on files - Understand how to navigate Mac OS using GUI and CLI - Understand common commands - Understand how to perform troubleshooting and use common Mac OS tools and services ### Network skills and knowledge - Understand the OSI model - Understand purposes and uses of common ports and protocols - Understand terminology such as: - VLAN - DMZ - ARP - VM(Virtual Machine) - NAT - IP - DNS - DHCP - Router - Switch - VPN - Understand IP ranges: public vs private and IP terminology - loopback - localhost - subnet mask - default gateway - Understand the basics and concepts behind subnetting - Understand network topologies such as: - star - mesh - ring - bus - Understand SSL and TLS fundamentals - Understand wireless and wired terminology such as: - MAN - LAN - WAN - WLAN - Understand functions of network services such as: - DHCP - DNS - NTP - IPAM - Understand how to troubleshoot networks using tools and commands such as: - packet sniffers - port scanners - protocol analyzers - ping - tracert - nslookup - ipconfig/ifconfig - iptables - netstat - tcpdump - nmap - route - arp - dig - Understand basics of NAS and SAN - Understand basics of virtualization such as: - hypervisor - vm - guest OS - host OS - Understand common virtualization technologies and how to use them: - VMWare - VirtualBox - [Optional] esxi - [Optional] proxmox - Understand protocols such as SSH, RDP, FTP, SFTP, HTTP/HTTPS, SSL/TLS - Understand the basics of authentication methodologies such as: - kerberos - LDAP - SSO - Certificates - Local auth - RADIUS - Understand the basics of common network-based attacks: - DoS vs DDoS - Evil Twin - MITM - DNS Poisoning - ARP Poisoning - Spoofing - Deauth attack - VLAN hopping - Rogue access point - War-driving/war-dialing ### Security skills and knowledge - Understand various attack types and the differences: - phishing vs vishing vs spear phishing vs whaling vs smishing - spam vs spim - shoulder surfing - dumpster diving - tailgating - social engineering - reconnaissance - impersonation - watering hole attack - drive by attack - typosquatting - brute force vs password spray - zero day - Understand basics of how malware operates and the different types - Understand web based attacks and the OWASP top 10 - Understand network based attacks - Understand privilege escalation and user based attacks - Understand additional attacks such as: - buffer overflow - memory leak - SQL injection - XSS - request forgery - pass the hash - directory traversal - replay attack - Understand CIA triad - Understand handshakes - Understand basics of threat intel, vulnerabilities, osint - Understand the differences between false positive, false negative, true negative, true positive - Understand blue team vs red team vs purple team - Understand stages of an attack (cyber kill chain) - Understand how to harden operating systems via configuration, MFA, 2FA - Understand MFA and 2FA - Understand Authentication (AuthN) vs Authorization (AuthZ) - Understand backups and resiliency - Understand the roles and responsibilities of compliance and auditors - Understand backup plans and business continuity - Understand the definition of risk - Understand basics of cryptography: - salting - hashing - key exchange - pki - private key vs public key - obfuscation - Understand secure protocols and how they differ from unsecure protocols such as: - FTP vs SFTP - SSL vs TLS - IPSec - DNSSEC - LDAPS - SRTP - SSH - S/MIME - Understand concepts such as: - antivirus - antimalware - endpoint detection and response (EDR) - DLP - firewall and next gen firewall - HIPS - NIDS - NIPS - host based firewall - sandboxing - ACL - WPA vs WPA2 vs WPA3 vs WEP - WPS - EAP vs PEAP - Understand the basics and core concepts of zero trust - Understand how to use tools to perform incident response and discovery such as: - nmap - tracert - nslookup - dig - ipconfig/ifconfig - hping - ping - arp - curl - head - tail - cat - grep - wireshark - memdump - dd - ftk imager - autopsy - tcpdump - winhex - Understand the incident response process: - preparation - identification - containment - eradication - recovery - lessons learned - Understand frameworks: - ATT&CK - Kill chain - Diamond Model - Understand terminology such as: - SIEM - SOAR - Understand common standards: - ISO - NIST - RMF - CIS - CSF - Understand basics of performing attacks against targets - Understand the two distros commonly used for hacking: - ParrotOS - Kali Linux - Understand how to use tools for unintended purposes: - LOLBAS - Understand various log sources, where to find them and how to use them: - event logs - syslogs - netflow - packet captures - firewall logs - Understand the difference between perimeter, DMZ, and segmentation - Understand the basics and concepts of IDS and IPS - Understand the concept of honeypots - Understand the concept of isolation - Understand hardening concepts such as: - MAC-based - patching - port blocking - Group policy - ACLs - sinkholes - NAC-based - jump box/server - endpoint security - Understand penetration testing rules of engagement - Understand basics of reverse engineering - Understand basics and concepts of vulnerability management - Understand basics and concepts of threat hunting - Understand threat classification: - zero day - known vs unknown - APT - Understand basics and concepts of forensics and how to perform memory and hard drive forensics - Understand audiences: - stakeholders - HR - legal - compliance - management - Understand communication and how it varies depending on audience - Understand common tools such as: - virustotal - joesandbox - any.run - urlvoid - urlscan - whois - Understand the concept of runbooks - Understand the concept of defense in depth - Understand common exploit frameworks - Understand common hacking tools ### Cloud skills and knowledge - Understand cloud services: - SaaS - PaaS - IaaS - Understand cloud models: - private - public - hybrid - Understand common cloud environments: - AWS - GCP - Azure - Understand concepts of security in the cloud - Understand the basics and general flow of deploying in the cloud - Understand the differences between cloud and on-prem - Understand common cloud storage: - Dropbox - Box - OneDrive - S3 - iCloud - Google Drive - Understand the concept of infrastructure as code - Understand the concept of serverless - Understand the concept of CDN ### [Optional] Programming skills and knowledge #### Python #### Bash #### Powershell #### Go #### JavaScript #### C++",
    user: {
      login: 'anonymous',
    },
    number: 123456,
    created_at: '2011-04-10T20:09:31Z',
    html_url: 'https://api.github.com/repos/octocat/Hello-World/issues/1347',
  },
  {
    title: 'Update 105-what-is-hosting.md',
    body: 'edit the definition of hosting .',
    user: {
      login: 'anonymous',
    },
    number: 123456,
    created_at: '2011-04-10T20:09:31Z',
    html_url: 'https://api.github.com/repos/octocat/Hello-World/issues/1347',
  },
  {
    title: '[Suggestion] Android Developer - Jetpack Compose',
    body: "Maybe we should have Jetpack Compose as a must, Thoughtworks's [Tech Radar 25](https://www.thoughtworks.com/radar/languages-and-frameworks/jetpack-compose) (2021 October) added Jetpack Compose as technology that should be adopted on new projects",
    user: {
      login: 'anonymous',
    },
    number: 123456,
    created_at: '2011-04-10T20:09:31Z',
    html_url: 'https://api.github.com/repos/octocat/Hello-World/issues/1347',
  },
  {
    title: '[Suggestion] QA Engineer',
    body: 'Headless Testing is a child element of Test Automation and should be placed before CI, because we believe that E2E testing embedded in CI is basically Headless. What do you think?',
    user: {
      login: 'anonymous',
    },
    number: 123456,
    created_at: '2011-04-10T20:09:31Z',
    html_url: 'https://api.github.com/repos/octocat/Hello-World/issues/1347',
  },
  {
    title: '[Suggestion] All Roadmaps - Filter based on checkmark color',
    body: 'It would be a nice touch if we could filter based on the checkmark color. My thought is that clicking the checkmark in the legend at the top would show/hide the items in the roadmap below based on the check.',
    user: {
      login: 'anonymous',
    },
    number: 123456,
    created_at: '2011-04-10T20:09:31Z',
    html_url: 'https://api.github.com/repos/octocat/Hello-World/issues/1347',
  },
];
