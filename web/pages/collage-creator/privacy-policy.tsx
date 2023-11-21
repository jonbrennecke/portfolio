import React from 'react';
import { Page } from '../../src/components';

export default function CollageCreatorPrivacyPolicyPage({
  privacyPolicyHTML,
}: {
  privacyPolicyHTML: string;
}) {
  return (
    <Page contentStyle="dark" showLoadingBanner={false}>
      {() => (
        <div className="max-w-screen-lg px-8 lg:px-0">
          <article
            className="prose mx-auto mt-32"
            dangerouslySetInnerHTML={{ __html: privacyPolicyHTML }}
          />
        </div>
      )}
    </Page>
  );
}

CollageCreatorPrivacyPolicyPage.getInitialProps = async () => ({
  privacyPolicyHTML: HTML,
});

const HTML = `
  <div class="iubenda_legal_document"> <h1>Privacy Policy of <strong>Collage Creator</strong></h1> <p>This Application collects some Personal Data from its Users.</p><br> <p>This document can be printed for reference by using the print command in the settings of any browser.</p> <h2 id="owner_of_the_data"> Owner and Data Controller </h2> <p>Jonathan Brennecke</p> <p><strong>Owner contact email:</strong> jon@jonbrennecke.com</p> <h2 id="types_of_data"> Types of Data collected </h2> <p> Among the types of Personal Data that this Application collects, by itself or through third parties, there are: Tracker; Usage Data; various types of Data; app information; payment info. </p> <p>Complete details on each type of Personal Data collected are provided in the dedicated sections of this privacy policy or by specific explanation texts displayed prior to the Data collection.<br>Personal Data may be freely provided by the User, or, in case of Usage Data, collected automatically when using this Application.<br>Unless specified otherwise, all Data requested by this Application is mandatory and failure to provide this Data may make it impossible for this Application to provide its services. In cases where this Application specifically states that some Data is not mandatory, Users are free not to communicate this Data without consequences to the availability or the functioning of the Service.<br>Users who are uncertain about which Personal Data is mandatory are welcome to contact the Owner.<br>Any use of Cookies – or of other tracking tools – by this Application or by the owners of third-party services used by this Application serves the purpose of providing the Service required by the User, in addition to any other purposes described in the present document and in the Cookie Policy, if available.</p> <p>Users are responsible for any third-party Personal Data obtained, published or shared through this Application and confirm that they have the third party's consent to provide the Data to the Owner.</p> <h2 id="place_of_processing">Mode and place of processing the Data</h2> <h3>Methods of processing</h3> <p>The Owner takes appropriate security measures to prevent unauthorized access, disclosure, modification, or unauthorized destruction of the Data.<br>The Data processing is carried out using computers and/or IT enabled tools, following organizational procedures and modes strictly related to the purposes indicated. In addition to the Owner, in some cases, the Data may be accessible to certain types of persons in charge, involved with the operation of this Application (administration, sales, marketing, legal, system administration) or external parties (such as third-party technical service providers, mail carriers, hosting providers, IT companies, communications agencies) appointed, if necessary, as Data Processors by the Owner. The updated list of these parties may be requested from the Owner at any time.</p> <h3>Legal basis of processing</h3> <p>The Owner may process Personal Data relating to Users if one of the following applies:</p> <ul> <li>Users have given their consent for one or more specific purposes. Note: Under some legislations the Owner may be allowed to process Personal Data until the User objects to such processing (“opt-out”), without having to rely on consent or any other of the following legal bases. This, however, does not apply, whenever the processing of Personal Data is subject to European data protection law;</li> <li>provision of Data is necessary for the performance of an agreement with the User and/or for any pre-contractual obligations thereof;</li> <li>processing is necessary for compliance with a legal obligation to which the Owner is subject;</li> <li>processing is related to a task that is carried out in the public interest or in the exercise of official authority vested in the Owner;</li> <li>processing is necessary for the purposes of the legitimate interests pursued by the Owner or by a third party.</li> </ul> <p>In any case, the Owner will gladly help to clarify the specific legal basis that applies to the processing, and in particular whether the provision of Personal Data is a statutory or contractual requirement, or a requirement necessary to enter into a contract. </p> <h3>Place</h3> <p>The Data is processed at the Owner's operating offices and in any other places where the parties involved in the processing are located.<br><br> Depending on the User's location, data transfers may involve transferring the User's Data to a country other than their own. To find out more about the place of processing of such transferred Data, Users can check the section containing details about the processing of Personal Data.</p> <p>Users are also entitled to learn about the legal basis of Data transfers to a country outside the European Union or to any international organization governed by public international law or set up by two or more countries, such as the UN, and about the security measures taken by the Owner to safeguard their Data.<br><br> If any such transfer takes place, Users can find out more by checking the relevant sections of this document or inquire with the Owner using the information provided in the contact section.</p> <h3>Retention time</h3> <p>Personal Data shall be processed and stored for as long as required by the purpose they have been collected for.</p> <p>Therefore:</p> <ul> <li>Personal Data collected for purposes related to the performance of a contract between the Owner and the User shall be retained until such contract has been fully performed.</li> <li>Personal Data collected for the purposes of the Owner’s legitimate interests shall be retained as long as needed to fulfill such purposes. Users may find specific information regarding the legitimate interests pursued by the Owner within the relevant sections of this document or by contacting the Owner.</li> </ul> <p>The Owner may be allowed to retain Personal Data for a longer period whenever the User has given consent to such processing, as long as such consent is not withdrawn. Furthermore, the Owner may be obliged to retain Personal Data for a longer period whenever required to do so for the performance of a legal obligation or upon order of an authority.<br><br> Once the retention period expires, Personal Data shall be deleted. Therefore, the right of access, the right to erasure, the right to rectification and the right to data portability cannot be enforced after expiration of the retention period.</p> <h2 id="use_collected_data">The purposes of processing</h2> <p> The Data concerning the User is collected to allow the Owner to provide its Service, comply with its legal obligations, respond to enforcement requests, protect its rights and interests (or those of its Users or third parties), detect any malicious or fraudulent activity, as well as the following: Analytics, Beta Testing, Handling payments, Infrastructure monitoring and Platform services and hosting. </p> <p>For specific information about the Personal Data used for each purpose, the User may refer to the section “Detailed information on the processing of Personal Data”.</p> <div data-locale="en"></div> <h2 id="data_processing_detailed_info">Detailed information on the processing of Personal Data</h2> <p>Personal Data is collected for the following purposes and using the following services:</p> <h3>Analytics</h3> <p>The services contained in this section enable the Owner to monitor and analyze web traffic and can be used to keep track of User behavior.</p> <h4>Google Analytics (Google LLC)</h4> <p>Google Analytics is a web analysis service provided by Google LLC (“Google”). Google utilizes the Data collected to track and examine the use of this Application, to prepare reports on its activities and share them with other Google services.<br> Google may use the Data collected to contextualize and personalize the ads of its own advertising network.</p> <p>Personal Data processed: Tracker; Usage Data.</p> <p>Place of processing: United States – <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> – <a href="https://tools.google.com/dlpage/gaoptout?hl=en" onclick="javascript:return tryFunc('tryGaOptOut',{href:'https://tools.google.com/dlpage/gaoptout?hl=en'})" target="_blank">Opt Out</a>. </p> <h3>Beta Testing</h3> <p>This type of service makes it possible to manage User access to this Application, or parts of it, for the purpose of testing a certain feature or the entire Application.<br> The service provider may automatically collect data related to crashes and statistics related to the User's use of this Application in a personally identifiable form.</p> <h4>TestFlight (Apple Inc.)</h4> <p>TestFlight is a beta testing service provided by Apple Inc.</p> <p>Personal Data processed: app information.</p> <p>Place of processing: United States – <a href="https://www.apple.com/legal/internet-services/itunes/testflight/sren/terms.html" target="_blank" rel="noopener noreferrer">Privacy Policy</a>. </p> <h3>Handling payments</h3> <p>Unless otherwise specified, this Application processes any payments by credit card, bank transfer or other means via external payment service providers. In general and unless where otherwise stated, Users are requested to provide their payment details and personal information directly to such payment service providers. This Application isn't involved in the collection and processing of such information: instead, it will only receive a notification by the relevant payment service provider as to whether payment has been successfully completed.</p> <h4>Payments processed via the Apple App Store (Apple Inc.)</h4> <p>This Application uses a payment service provided by Apple Inc. that allows the Owner to offer the purchase of the app itself or in-app purchases.</p> <p>Personal Data processed to complete the purchases are processed by Apple, as described in the <a href="https://www.apple.com/legal/privacy/en-ww/">privacy policy for the App Store</a>.</p> <p>Personal Data processed: payment info.</p> <p>Place of processing: United States – <a href="https://www.apple.com/legal/privacy/en-ww/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>. </p> <h3>Infrastructure monitoring</h3> <p>This type of service allows this Application to monitor the use and behavior of its components so its performance, operation, maintenance and troubleshooting can be improved.<br> Which Personal Data are processed depends on the characteristics and mode of implementation of these services, whose function is to filter the activities of this Application.</p> <h4>Sentry (Functional Software, Inc. )</h4> <p>Sentry is a monitoring service provided by Functional Software, Inc. .</p> <p>Personal Data processed: various types of Data as specified in the privacy policy of the service.</p> <p>Place of processing: United States – <a href="https://sentry.io/privacy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>. </p> <h3>Platform services and hosting</h3> <p>These services have the purpose of hosting and running key components of this Application, therefore allowing the provision of this Application from within a unified platform. Such platforms provide a wide range of tools to the Owner – e.g. analytics, user registration, commenting, database management, e-commerce, payment processing – that imply the collection and handling of Personal Data. <br> Some of these services work through geographically distributed servers, making it difficult to determine the actual location where the Personal Data are stored.</p> <h4>Apple App Store (Apple Inc.)</h4> <p>This Application is distributed on Apple's App Store, a platform for the distribution of mobile apps, provided by Apple Inc.</p> <p>By virtue of being distributed via this app store, Apple collects basic analytics and provides reporting features that enables the Owner to view usage analytics data and measure the performance of this Application. Much of this information is processed on an opt-in basis.</p> <p>Users may opt-out of this analytics feature directly through their device settings. More information on how to manage analysis settings can be found on <a href="https://support.apple.com/en-us/HT202100">this page</a>.</p> <p>Personal Data processed: Usage Data.</p> <p>Place of processing: United States – <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>. </p> <div data-locale="en"></div> <h2 id="further_data">Further information about the processing of Personal Data</h2> <h3>Equal protection of User Data</h3> <p>This Application shares User Data only with third parties carefully selected to ensure that they provide the same or equal protection of User Data as stated in this privacy policy and requested by applicable data protection laws. Further information on data processing and privacy practices by third parties can be found in their respective privacy policies.</p> <h2 id="rights_subjects">The rights of Users</h2> <p>Users may exercise certain rights regarding their Data processed by the Owner.</p> <p>In particular, Users have the right to do the following:</p> <ul> <li><strong>Withdraw their consent at any time.</strong> Users have the right to withdraw consent where they have previously given their consent to the processing of their Personal Data.</li> <li><strong>Object to processing of their Data.</strong> Users have the right to object to the processing of their Data if the processing is carried out on a legal basis other than consent. Further details are provided in the dedicated section below.</li> <li><strong>Access their Data.</strong> Users have the right to learn if Data is being processed by the Owner, obtain disclosure regarding certain aspects of the processing and obtain a copy of the Data undergoing processing.</li> <li><strong>Verify and seek rectification.</strong> Users have the right to verify the accuracy of their Data and ask for it to be updated or corrected.</li> <li><strong>Restrict the processing of their Data.</strong> Users have the right, under certain circumstances, to restrict the processing of their Data. In this case, the Owner will not process their Data for any purpose other than storing it. </li> <li><strong>Have their Personal Data deleted or otherwise removed.</strong> Users have the right, under certain circumstances, to obtain the erasure of their Data from the Owner.</li> <li><strong>Receive their Data and have it transferred to another controller.</strong> Users have the right to receive their Data in a structured, commonly used and machine readable format and, if technically feasible, to have it transmitted to another controller without any hindrance. This provision is applicable provided that the Data is processed by automated means and that the processing is based on the User's consent, on a contract which the User is part of or on pre-contractual obligations thereof.</li> <li><strong>Lodge a complaint.</strong> Users have the right to bring a claim before their competent data protection authority.</li> </ul> <h3>Details about the right to object to processing</h3> <p>Where Personal Data is processed for a public interest, in the exercise of an official authority vested in the Owner or for the purposes of the legitimate interests pursued by the Owner, Users may object to such processing by providing a ground related to their particular situation to justify the objection.</p> <p>Users must know that, however, should their Personal Data be processed for direct marketing purposes, they can object to that processing at any time without providing any justification. To learn, whether the Owner is processing Personal Data for direct marketing purposes, Users may refer to the relevant sections of this document. </p> <h3>How to exercise these rights</h3> <p>Any requests to exercise User rights can be directed to the Owner through the contact details provided in this document. These requests can be exercised free of charge and will be addressed by the Owner as early as possible and always within one month.</p> <h2 id="further_data_processing_info">Additional information about Data collection and processing</h2> <h3>Legal action</h3> <p>The User's Personal Data may be used for legal purposes by the Owner in Court or in the stages leading to possible legal action arising from improper use of this Application or the related Services.<br>The User declares to be aware that the Owner may be required to reveal personal data upon request of public authorities.</p> <h3>Additional information about User's Personal Data</h3> <p>In addition to the information contained in this privacy policy, this Application may provide the User with additional and contextual information concerning particular Services or the collection and processing of Personal Data upon request.</p> <h3>System logs and maintenance</h3> <p>For operation and maintenance purposes, this Application and any third-party services may collect files that record interaction with this Application (System logs) use other Personal Data (such as the IP Address) for this purpose.</p> <h3>Information not contained in this policy</h3> <p>More details concerning the collection or processing of Personal Data may be requested from the Owner at any time. Please see the contact information at the beginning of this document.</p> <h3>How “Do Not Track” requests are handled</h3> <p>This Application does not support “Do Not Track” requests.<br>To determine whether any of the third-party services it uses honor the “Do Not Track” requests, please read their privacy policies.</p> <h3>Changes to this privacy policy</h3> <p>The Owner reserves the right to make changes to this privacy policy at any time by notifying its Users on this page and possibly within this Application and/or - as far as technically and legally feasible - sending a notice to Users via any contact information available to the Owner. It is strongly recommended to check this page often, referring to the date of the last modification listed at the bottom. <br><br> Should the changes affect processing activities performed on the basis of the User’s consent, the Owner shall collect new consent from the User, where required.</p> <h3 id="definitions_and_legal_references"> Definitions and legal references </h3> <h4>Personal Data (or Data)</h4> <p>Any information that directly, indirectly, or in connection with other information — including a personal identification number — allows for the identification or identifiability of a natural person.</p> <h4>Usage Data</h4> <p>Information collected automatically through this Application (or third-party services employed in this Application), which can include: the IP addresses or domain names of the computers utilized by the Users who use this Application, the URI addresses (Uniform Resource Identifier), the time of the request, the method utilized to submit the request to the server, the size of the file received in response, the numerical code indicating the status of the server's answer (successful outcome, error, etc.), the country of origin, the features of the browser and the operating system utilized by the User, the various time details per visit (e.g., the time spent on each page within the Application) and the details about the path followed within the Application with special reference to the sequence of pages visited, and other parameters about the device operating system and/or the User's IT environment.</p> <h4>User</h4> <p>The individual using this Application who, unless otherwise specified, coincides with the Data Subject.</p> <h4>Data Subject</h4> <p>The natural person to whom the Personal Data refers.</p> <h4>Data Processor (or Data Supervisor)</h4> <p>The natural or legal person, public authority, agency or other body which processes Personal Data on behalf of the Controller, as described in this privacy policy.</p> <h4>Data Controller (or Owner)</h4> <p>The natural or legal person, public authority, agency or other body which, alone or jointly with others, determines the purposes and means of the processing of Personal Data, including the security measures concerning the operation and use of this Application. The Data Controller, unless otherwise specified, is the Owner of this Application.</p> <h4>This Application</h4> <p>The means by which the Personal Data of the User is collected and processed.</p> <h4>Service</h4> <p>The service provided by this Application as described in the relative terms (if available) and on this site/application.</p> <h4>European Union (or EU)</h4> <p>Unless otherwise specified, all references made within this document to the European Union include all current member states to the European Union and the European Economic Area.</p> <h4>Cookie</h4> <p>Cookies are Trackers consisting of small sets of data stored in the User's browser.</p> <h4>Tracker</h4> <p>Tracker indicates any technology - e.g Cookies, unique identifiers, web beacons, embedded scripts, e-tags and fingerprinting - that enables the tracking of Users, for example by accessing or storing information on the User’s device.</p> <h4>Legal information</h4> <p>This privacy statement has been prepared based on provisions of multiple legislations, including Art. 13/14 of Regulation (EU) 2016/679 (General Data Protection Regulation).</p> <p>This privacy policy relates solely to this Application, if not stated otherwise within this document.</p> <p> Latest update: January 27, 2022 </p> </div>
`;
