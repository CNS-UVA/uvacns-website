<script>
    import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
</script>

<div class="p-24 container mx-auto flex-column [&>*]:px-8">
    <h1 class="p-8"> Here are some resources we're particularly excited about. </h1>
    <div class="p-4 [&>*]:py-1">
        <h2> CyberStorm </h2>
        <ul>
            <li> <b>Website:</b> <a href="https://cyberstorm.uvacns.com/"> https://cyberstorm.uvacns.com/ </a> </li>
            <li> <b>Contact:</b> <a href="mailto:cah3ks@virginia.edu"> cah3ks@virginia.edu </a> </li>
            <li> <b>Description:</b> 
                CyberStorm is a red versus blue team competition that simulates real-world cyber attacks in a controlled environment. Participants (blue teams) are responsible for maintaining business operations while warding off an active cyber threat, simulated by the red team. Hosted by CNS@UVA every semester, it is the biggest university event that tests your abilities to defend against cyber-attack scenarios and keep you on your feet.
            </li>
        </ul>
    </div>
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
    <div class="p-4 [&>*]:py-1">
        <h2> Collegiate Cyber Defense Competition</h2>
        <ul>
            <li> <b>Nationals Website:</b> <a href="https://www.nationalccdc.org/"> https://www.nationalccdc.org/ </a> </li>
            <li> <b>Regionals Website:</b> <a href="https://maccdc.org/"> https://maccdc.org/ </a> </li>
            <li> <b>Description:</b> 
                The Collegiate Cyber Defense Competition (CCDC) is an annual event that challenges college and university students to protect a simulated corporate network from cyberattacks. The competition involves creating and defending a network against a red team of professional hackers while maintaining critical services for a simulated business. The teams are scored based on their ability to identify and mitigate security risks, respond to incidents, and maintain service availability.
            </li>
        </ul>
    </div>

    <h1 class="pt-16"> Want to dive into a specific topic? </h1>
    <p class="pt-4"> Here are some websites that we found useful for learning a variety of security applications: </p>

    <Accordion>
        <AccordionItem open>
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
        <AccordionItem open>
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
                            <a href="" class="no-underline">
                                <b></b>

                                <p> 
                                </p>
                            </a>
                        </li>
                        <li class="[&>*]:pt-4">
                            <a href="" class="no-underline">
                                <b></b>

                                <p> 
                                </p>
                            </a>
                        </li>
                    </ul>
                </svelte:fragment>
        </AccordionItem>
        <AccordionItem open>
            <svelte:fragment slot="summary"><b>Application Security</b></svelte:fragment>
                <svelte:fragment slot="content">

                </svelte:fragment>
        </AccordionItem>
        <AccordionItem open>
            <svelte:fragment slot="summary"><b>General Practice</b></svelte:fragment>
                <svelte:fragment slot="content">

                </svelte:fragment>
        </AccordionItem>
        <AccordionItem open>
            <svelte:fragment slot="summary"><b>Advanced Topics</b></svelte:fragment>
                <svelte:fragment slot="content">

                </svelte:fragment>
        </AccordionItem>
        <AccordionItem open>
            <svelte:fragment slot="summary"><b>News and Blogs</b></svelte:fragment>
                <svelte:fragment slot="content">

                </svelte:fragment>
        </AccordionItem>
    </Accordion>
</div>
