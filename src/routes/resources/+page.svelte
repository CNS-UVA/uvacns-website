<script>
    import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
</script>

<div class="p-24 container mx-auto flex-column [&>*]:px-8">
    <h1 class="p-8"> Interested in learning more? </h1>
    <div class="p-4 [&>*]:py-1">
        <h2> MetaCTF </h2>
        <ul>
            <li> <b>Website:</b> <a href="https://metactf.com/"> https://metactf.com/ </a> </li>
            <li> <b>Contact:</b> <a href="mailto:contact@metactf.com"> contact@metactf.com </a> </li>
            <li> <b>Description:</b> MetaCTF is an organization dedicated to providing accessible cybersecurity education to everyone. They create a variety of interactive, educational capture-the-flag events that help you learn new cybersecurity skills that simulate real world scenarios. 
            </li>
        </ul>
    </div>
    <div class="p-4 [&>*]:py-1">
        <h2> Hack The Box </h2>
        <ul>
            <li> <b>Website:</b> <a href="https://www.hackthebox.com/"> https://www.hackthebox.com/ </a> </li>
            <li> <b>Description:</b> Hack The Box is an organization designing a gamified software platform for cybersecurity upskilling and talent assessment. Their goal is to allow individuals, businesses, government institutions, and universities sharpen both their offensive and defensive cybersecurity skills while making it an engaging and fun experience. 
            </li>
        </ul>
    </div>

    <h1 class="pt-16"> Want to dive into a specific topic? </h1>
    <p class="pt-4"> Here are some websites that we found useful for learning a variety of security applications: </p>

    <Accordion>
        <AccordionItem autocollapse>
            <svelte:fragment slot="summary"><b>Web Security</b></svelte:fragment>
                <svelte:fragment slot="content">
                    <ul>
                        <li class="[&>*]:pt-4">
                            <a href="https://www.owasp.org/index.php/Top_10_2013-Top_10" class="no-underline">
                                <b> OWASP Top 10 </b>

                                <p> 
                                    This guide is published by OWASP, an open group focused on web security.
                                    The latest revision (2021) details the top 10 web vulnerabilities seen in the
                                    wild, with extensive information on each one. Definitely a great starting point.
                                </p>
                            </a>
                        </li>
                    <ul>
                        <li class="[&>*]:pt-4">
                            <a href="https://github.com/WebGoat/WebGoat" class="no-underline">
                                <b>WebGoat</b>

                                <p> 
                                    WebGoat is a purposely insecure web application made by OWASP to demonstrate basic
                                    security vulnerabilities. Each vulnerability in the app comes with extensive write-ups
                                    and information so you can really learn the ins and outs of every vulnerability.
                                </p>
                            </a>
                        </li>
                        <li class="[&>*]:pt-4">
                            <a href="https://www.exploit-db.com/papers/17934" class="no-underline">
                                <b>Beyond SQLi: Obfuscate and Bypass</b>

                                <p> 
                                    This site lists techniques to get around filtering to help you with SQL injection.
                                    However, these techniques can be applied to filtering in general, such as to get around
                                    XSS or other filters.
                                </p>
                            </a>
                        </li>
                        <li class="[&>*]:pt-4">
                            <a href="http://pentestmonkey.net/category/cheat-sheet/sql-injection" class="no-underline">
                                <b> SQL Injection Cheat Sheets</b>

                                <p> 
                                    This site hosts cheat sheets for 7 different flavors of SQL. They go into enumerating
                                    tables, columns, and other kinds of data you'd need from a database.
                                </p>
                            </a>
                        </li>
                    </ul>
                </svelte:fragment>
        </AccordionItem>
        <AccordionItem autocollapse>
            <svelte:fragment slot="summary"><b>Cryptography</b></svelte:fragment>
                <svelte:fragment slot="content">
                    <ul>
                        <li class="[&>*]:pt-4">
                            <a href="http://cryptopals.com/" class="no-underline">
                                <b> Matasano Crypto Challenges </b>

                                <p> 
                                    A series of online problems designed to take you from the basics of crypto-math to
                                    attacks on real world cryptography.
                                </p>
                            </a>
                        </li>
                        <li class="[&>*]:pt-4">
                            <a href="https://class.coursera.org/crypto-preview" class="no-underline">
                                <b> Introduction to Cryptography on Coursera </b>

                                <p> 
                                    This online course is taught by Dan Boneh, one of the researchers on the forefront of
                                    modern cryptography. The course runs year-round, but there are also scheduled classes
                                    taught a few times a year.
                                </p>
                            </a>
                        </li>
                        <li class="[&>*]:pt-4">
                            <a href="http://cacr.uwaterloo.ca/hac" class="no-underline">
                                <b> Handbook of Applied Cryptography </b>

                                <p> 
                                    Chapter 1 has a great overview of many different cryptographic primitives: symmetric-key
                                    encryption, public-key encryption, digital signatures, hash functions, randomness, etc.
                                    The other chapters get pretty intense but are also very good.
                                </p>
                            </a>
                        </li>
                    </ul>
                </svelte:fragment>
        </AccordionItem>
        <AccordionItem autocollapse>
            <svelte:fragment slot="summary"><b>Application Security</b></svelte:fragment>
                <svelte:fragment slot="content">
                    <ul>
                        <li class="[&>*]:pt-4">
                            <a href="http://opensecuritytraining.info/Training.html" class="no-underline">
                                <b> Open Security Training </b>

                                <p> 
                                    A series of courses that build malware analysis and exploitation knowledge from the ground
                                    up. Start at Introductory x86 and move on from there.
                                </p>
                            </a>
                        </li>
                        <li class="[&>*]:pt-4">
                            <a href="https://microcorruption.com/login" class="no-underline">
                                <b> Microcorruption </b>

                                <p> 
                                    A cool embedded security CTF made by the creators of Cryptopals, Matasano. A great way to
                                    learn assembly and debugging in a realistic context.
                                </p>
                            </a>
                        </li>
                        <li class="[&>*]:pt-4">
                            <a href="https://github.com/RPISEC/MBE" class="no-underline">
                                <b> Modern Binary Exploitation </b>

                                <p> 
                                    This repository contains the materials to an RPI course on vulnerability research, reverse
                                    engineering and binary exploitation. The expected demographic is students with zero reverse
                                    engineering or binary exploitation knowledge.
                                </p>
                            </a>
                        </li>
                        <li class="[&>*]:pt-4">
                            <a href="http://insecure.org/stf/smashstack.html" class="no-underline">
                                <b> Smashing the Stack for Fun and Profit </b>

                                <p> 
                                    This is THE writeup on buffer overflows. It requires a basic knowledge of x86 assembly. An
                                    understanding of concepts such as memory is helpful, but the paper does a nice job of explaining
                                    the stack and how programs access it.
                                </p>
                            </a>
                        </li>
                    </ul>

                </svelte:fragment>
        </AccordionItem>
        <AccordionItem autocollapse>
            <svelte:fragment slot="summary"><b>General Practice</b></svelte:fragment>
                <svelte:fragment slot="content">
                    <ul>
                        <li class="[&>*]:pt-4">
                            <a href="http://www.amanhardikar.com/mindmaps/Practice.html" class="no-underline">
                                <b> Practice Lab Mindmap </b>

                                <p> 
                                    A huge list of sites, web apps, operating systems, and mobile apps to practice exploiting.
                                    Some of the best are listed below. 
                                </p>
                            </a>
                        </li>
                        <li class="[&>*]:pt-4">
                            <a href="https://www.hackthissite.org/" class="no-underline">
                                <b> Hack this Site </b>

                                <p> 
                                    In addition to some basic challenges, this site hosts a series of "realistic" challenges 
                                    which give you (almost) a full site to hack.
                                </p>
                            </a>
                        </li>
                        <li class="[&>*]:pt-4">
                            <a href="http://overthewire.org/wargames" class="no-underline">
                                <b> Over the Wire Wargames </b>

                                <p> 
                                    This site hosts a number of environments to try out binary exploitation. The levels start
                                    out very accessible, and build up as you progress. The first wargame, bandit, also teaches
                                    how to use the command line on a linux system. 
                                </p>
                            </a>
                        </li>
                        <li class="[&>*]:pt-4">
                            <a href="http://smashthestack.org/index.html" class="no-underline">
                                <b> Smash the Stack Wargames </b>

                                <p> 
                                    Another set of wargames, this site offers additional opportunities for reverse engineering
                                    and exploitation.
                                </p>
                            </a>
                        </li>
                    </ul>

                </svelte:fragment>
        </AccordionItem>
        <AccordionItem autocollapse>
            <svelte:fragment slot="summary"><b>Advanced Topics</b></svelte:fragment>
                <svelte:fragment slot="content">
                    <ul>
                        <li class="[&>*]:pt-4">
                            <a href="https://www.offensive-security.com/metasploit-unleashed" class="no-underline">
                                <b> Metasploit Unleashed </b>

                                <p> 
                                    Metasploit is the world's most used penetration testing software. This course will teach
                                    you how to use Metasploit in a structured and professional manner. 
                                </p>
                            </a>
                        </li>
                        <li class="[&>*]:pt-4">
                            <a href="http://pwnable.kr/" class="no-underline">
                                <b> Pwnable.kr </b>

                                <p> 
                                    A more advanced collection of security challenges. Mostly deals with executables, 
                                    reversing, or system knowledge. 
                                </p>
                            </a>
                        </li>
                    </ul>

                </svelte:fragment>
        </AccordionItem>
        <AccordionItem autocollapse>
            <svelte:fragment slot="summary"><b>News and Blogs</b></svelte:fragment>
                <svelte:fragment slot="content">
                    <ul>
                        <li class="[&>*]:pt-4">
                            <a href="https://www.schneier.com/" class="no-underline">
                                <b> Schneier on Security </b>

                                <p> 
                                    Bruce Schneier is an internationally renowned security technologist. His blog is pretty good.
                                    Also check out his newsletter "Crypto-Gram".
                                </p>
                            </a>
                        </li>
                        <li class="[&>*]:pt-4">
                            <a href="http://krebsonsecurity.com/" class="no-underline">
                                <b> Krebs on Security </b>

                                <p> 
                                    Brian Krebs is a reporter who also knows a lot about security. Doesn't have headlines, does
                                    have very good in-depth reporting.
                                </p>
                            </a>
                        </li>
                        <li class="[&>*]:pt-4">
                            <a href="https://isc.sans.edu/" class="no-underline">
                                <b> SANS Internet Storm Center </b>

                                <p> 
                                    The Internet Storm Center (ISC) monitors for and idenitifies new and emerging cyber threats.
                                    Sometimes the threats are underwhelming (e.g. malicious spam with Word Document), but the ISC
                                    has also detected and analyzed important new malware.
                                </p>
                            </a>
                        </li>
                        <li class="[&>*]:pt-4">
                            <a href="https://news.ycombinator.com/" class="no-underline">
                                <b> Hacker News </b>

                                <p> 
                                    Mostly about software development, but also some security pops up.
                                </p>
                            </a>
                        </li>
                    </ul>

                </svelte:fragment>
        </AccordionItem>
    </Accordion>
</div>
