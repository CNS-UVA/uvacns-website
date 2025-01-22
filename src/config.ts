const config = {
	events: [
		{
			header: 'Weekly Meetings',
			fields: [
				{
					header: 'When',
					text: 'Wednesdays at 7:00 PM ET'
				},
				{
					header: 'Location',
					text: 'Olsson Hall'
				},
				{
					header: 'Description',
					text: 'Each week, we have something new to show to all of our members at CNS. Ranging from mini capture-the-flag competitions to talks about binary exploitation, our weekly meetings are a great way to dive deep into the realm of cybersecurity. We also leverage our connections to introduce speakers that have served in the security industry to give you the information you need to succeed.'
				}
			]
		},
		{
			header: 'CyberStorm',
			fields: [
				{
					header: 'Website',
					text: 'https://cyberstorm.uvacns.com',
					href: 'https://cyberstorm.uvacns.com'
				},
				{
					header: 'Description',
					text: 'CyberStorm is a red versus blue team competition that simulates real-world cyber attacks in a controlled environment. Participants (blue teams) are responsible for maintaining business operations while warding off an active cyber threat, simulated by the red team. Hosted by CNS@UVA every semester, it is the biggest university event that tests your abilities to defend against cyber-attack scenarios and keep you on your feet.'
				}
			]
		},
		{
			header: 'Collegiate Cyber Defense Competition',
			fields: [
				{
					header: 'Nationals Website',
					text: 'https://www.nationalccdc.org',
					href: 'https://www.nationalccdc.org'
				},
				{
					header: 'Regionals Website',
					text: 'https://www.maccdc.org',
					href: 'https://www.maccdc.org'
				},
				{
					header: 'Description',
					text: 'The Collegiate Cyber Defense Competition (CCDC) is an annual event that challenges college and university students to protect a simulated corporate network from cyberattacks. The competition involves creating and defending a network against a red team of professional hackers while maintaining critical services for a simulated business. The teams are scored based on their ability to identify and mitigate security risks, respond to incidents, and maintain service availability.'
				}
			]
		}
	],
	links: [
		{
			text: 'Mailing List',
			href: 'https://lists.virginia.edu/sympa/subscribe/cnsuva'
		},
		{
			text: 'Contact',
			href: 'mailto:cnsuva-officers@virginia.edu'
		},
		{
			text: 'Discord',
			href: 'https://discord.com/invite/AeSy8wM3NV'
		}
	],
	nav: [
		{
			text: 'Home',
			href: '/'
		},
		{
			text: 'Events',
			href: '/events'
		},
		{
			text: 'Resources',
			href: '/resources'
		},
		{
			text: 'Officers',
			href: '/officers'
		}
	],
	officers: [
		{
			first_name: 'Shreyas',
			last_name: 'Mayya',
			role: 'President',
			img: 'officers/25-26/shreyas.jpg'
		},
		{
			first_name: 'Vincent',
			last_name: 'Zhang',
			role: 'Vice President for Infrastructure',
			img: 'officers/25-26/vincent.jpg'
		},
		{
			first_name: 'Iuri',
			last_name: 'Vintonyak',
			role: 'Vice President for Cyber Offense',
			img: 'officers/25-26/iuri.jpg'
		},
		{
			first_name: 'Benjamin',
			last_name: 'Wolcott',
			role: 'Vice President for Cyber Defense',
			img: 'officers/25-26/ben.jpg'
		},
		{
			first_name: 'Arjun',
			last_name: 'Rao',
			role: 'Secretary',
			img: 'officers/25-26/arjun.jpg'
		},
		{
			first_name: 'Nikhil',
			last_name: 'Boyalla',
			role: 'Treasurer',
			img: 'officers/25-26/nikhil.jpg'
		},
		{
			first_name: 'Austin',
			last_name: 'Song',
			role: 'Publicist',
			img: 'officers/25-26/austin_s.jpg'
		},
		{
			first_name: 'Austin',
			last_name: 'Trinh',
			role: 'Meetings Chair',
			img: 'officers/25-26/austin_t.jpg'
		}
	],
	resources: {
		general: [
			{
				header: 'MetaCTF',
				fields: [
					{
						header: 'Website',
						text: 'https://metactf.com',
						href: 'https://metactf.com'
					},
					{
						header: 'Contact',
						text: 'contact@metactf.com',
						href: 'mailto:contact@metactf.com'
					},
					{
						header: 'Description',
						text: 'MetaCTF is an organization dedicated to providing accessible cybersecurity education to everyone. They create a variety of interactive, educational capture-the-flag events that help you learn new cybersecurity skills that simulate real world scenarios.'
					}
				]
			},
			{
				header: 'Hack The Box',
				fields: [
					{
						header: 'Website',
						text: 'https://www.hackthebox.com',
						href: 'https://www.hackthebox.com'
					},
					{
						header: 'Description',
						text: 'Hack The Box is an organization designing a gamified software platform for cybersecurity upskilling and talent assessment. Their goal is to allow individuals, businesses, government institutions, and universities sharpen both their offensive and defensive cybersecurity skills while making it an engaging and fun experience.'
					}
				]
			}
		],
		specific: [
			{
				category: 'Web Security',
				resources: [
					{
						header: 'OWASP Top 10',
						text: 'This guide is published by OWASP, an open group focused on web security. The latest revision (2021) details the top 10 web vulnerabilities seen in the wild, with extensive information on each one. Definitely a great starting point.',
						href: 'https://www.owasp.org/index.php/Top_10_2013-Top_10'
					},
					{
						header: 'WebGoat',
						text: 'WebGoat is a purposely insecure web application made by OWASP to demonstrate basic security vulnerabilities. Each vulnerability in the app comes with extensive write-ups and information so you can really learn the ins and outs of every vulnerability.',
						href: 'https://github.com/WebGoat/WebGoat'
					},
					{
						header: 'Beyond SQLi: Obfuscate and Bypass',
						text: 'This site lists techniques to get around filtering to help you with SQL injection. However, these techniques can be applied to filtering in general, such as to get around XSS or other filters.',
						href: 'https://www.exploit-db.com/papers/17934'
					},
					{
						header: 'SQL Injection Cheat Sheets',
						text: "This site hosts cheat sheets for 7 different flavors of SQL. They go into enumerating tables, columns, and other kinds of data you'd need from a database.",
						href: 'https://pentestmonkey.net/category/cheat-sheet/sql-injection'
					}
				]
			},
			{
				category: 'Cryptography',
				resources: [
					{
						header: 'Matasano Crypto Challenges',
						text: 'A series of online problems designed to take you from the basics of crypto-math to attacks on real world cryptography.',
						href: 'https://cryptopals.com'
					},
					{
						header: 'Introduction to Cryptography on Coursera',
						text: 'This online course is taught by Dan Boneh, one of the researchers on the forefront of modern cryptography. The course runs year-round, but there are also scheduled classes taught a few times a year.',
						href: 'https://class.coursera.org/crypto-preview'
					},
					{
						header: 'Handbook of Applied Cryptography',
						text: 'Chapter 1 has a great overview of many different cryptographic primitives: symmetric-key encryption, public-key encryption, digital signatures, hash functions, randomness, etc. The other chapters get pretty intense but are also very good.',
						href: 'https://cacr.uwaterloo.ca/hac'
					}
				]
			},
			{
				category: 'Application Security',
				resources: [
					{
						header: 'Open Security Training',
						text: 'A series of courses that build malware analysis and exploitation knowledge from the ground up. Start at Introductory x86 and move on from there.',
						href: 'https://opensecuritytraining.info/Training.html'
					},
					{
						header: 'Microcorruption',
						text: 'A cool embedded security CTF made by the creators of Cryptopals, Matasano. A great way to learn assembly and debugging in a realistic context.',
						href: 'https://microcorruption.com/login'
					},
					{
						header: 'Modern Binary Exploitation',
						text: 'This repository contains the materials to an RPI course on vulnerability research, reverse engineering and binary exploitation. The expected demographic is students with zero reverse engineering or binary exploitation knowledge.',
						href: 'https://github.com/RPISEC/MBE'
					},
					{
						header: 'Smashing the Stack for Fun and Profit',
						text: 'This is THE writeup on buffer overflows. It requires a basic knowledge of x86 assembly. An understanding of concepts such as memory is helpful, but the paper does a nice job of explaining the stack and how programs access it.',
						href: 'https://insecure.org/stf/smashstack.html'
					}
				]
			},
			{
				category: 'General Practice',
				resources: [
					{
						header: 'Practice Lab Mindmap',
						text: 'A huge list of sites, web apps, operating systems, and mobile apps to practice exploiting. Some of the best are listed below.',
						href: 'https://www.amanhardikar.com/mindmaps/Practice.html'
					},
					{
						header: 'Hack This Site',
						text: 'In addition to some basic challenges, this site hosts a series of "realistic" challenges which give you (almost) a full site to hack.',
						href: 'https://www.hackthissite.org'
					},
					{
						header: 'Over the Wire Wargames',
						text: 'This site hosts a number of environments to try out binary exploitation. The levels start out very accessible, and build up as you progress. The first wargame, bandit, also teaches how to use the command line on a Linux system.',
						href: 'https://overthewire.org/wargames'
					},
					{
						header: 'Smash the Stack Wargames',
						text: 'Another set of wargames, this site offers additional opportunities for reverse engineering and exploitation.',
						href: 'https://smashthestack.org/index.html'
					}
				]
			},
			{
				category: 'Advanced Topics',
				resources: [
					{
						header: 'Metasploit Unleashed',
						text: "Metasploit is the world's most used penetration testing software. This course will teach you how to use Metasploit in a structured and professional manner.",
						href: 'https://www.offensive-security.com/metasploit-unleashed'
					},
					{
						header: 'Pwnable.kr',
						text: 'A more advanced collection of security challenges. Mostly deals with executables, reversing, or system knowledge.',
						href: 'https://pwnable.kr'
					}
				]
			},
			{
				category: 'News and Blogs',
				resources: [
					{
						header: 'Schneier on Security',
						text: 'Bruce Schneier is an internationally renowned security technologist. His blog is pretty good. Also check out his newsletter "Crypto-Gram".',
						href: 'https://www.schneier.com'
					},
					{
						header: 'Krebs on Security',
						text: "Brian Krebs is a reporter who also knows a lot about security. Doesn't have headlines, does have very good in-depth reporting.",
						href: 'https://krebsonsecurity.com'
					},
					{
						header: 'SANS Internet Storm Center',
						text: 'The Internet Storm Center (ISC) monitors for and idenitifies new and emerging cyber threats. Sometimes the threats are underwhelming (e.g. malicious spam with Word Document), but the ISC has also detected and analyzed important new malware.',
						href: 'https://isc.sans.edu'
					}
				]
			}
		]
	},
	title: 'Computer and Network Security @ UVA'
};

export default config;
