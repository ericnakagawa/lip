(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{191:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return p}));var n=a(1),r=a(9),i=(a(0),a(200)),b=a(202),c={lip:10,title:"Libra ID Spec",authors:"Andrey Chursin(@andll), Kevin Hurley (@kphfb)",status:"draft",type:"standard",created:"11/03/2020"},l={id:"lip-10",title:"Libra ID Spec",description:"# Summary",source:"@site/all-docs__GENERATED/lip-10.md",permalink:"/lip-10",editUrl:"https://github.com/libra/lip/edit/master/all-docs__GENERATED/lip-10.md"},o=[{value:"Libra ID domains",id:"libra-id-domains",children:[]},{value:"Info endpoint",id:"info-endpoint",children:[]},{value:"Pay endpoint",id:"pay-endpoint",children:[]},{value:"User Object",id:"user-object",children:[]},{value:"Profile Picture URI",id:"profile-picture-uri",children:[]}],s={rightToc:o};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"summary"},"Summary"),Object(i.b)("p",null,"This LIP describes Libra ID - the human-readable identifier for user accounts.   "),Object(i.b)("p",null,"In addition to describing the format of the Libra ID, this LIP also describes the off-chain protocol for the peer-2-peer payment with Libra ID."),Object(i.b)("h1",{id:"motivation"},"Motivation"),Object(i.b)("p",null,"Libra ID provides a convenient way to identify a user's account within a VASP. There are two main use cases for Libra ID:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"For peer-2-peer payments, Libra ID allows a user to provide a human-readable \u2018identifier\u2019 to the sender. Basically, instead of sending a ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/libra/lip/blob/master/lips/lip-5.md"}),"lip-5 address")," (that needs to be refreshed for each payment, ideally), the receiver can just share their Libra ID once. In this case Libra ID plays the role of an email address for payments. Benefits for this use case:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The Libra ID resolution process can facilitate the exchange of rich information(e.g. nicknames, profile picture, etc.) about both the sender and receiver of the payment"),Object(i.b)("li",{parentName:"ul"},"Libra ID provides better privacy compared to using sub-addresses, because Libra ID is not shared on the chain and will always use a single-use identifier for the on-chain ID"),Object(i.b)("li",{parentName:"ul"},"From a user's perspective, Libra ID is a persistent identifier.  But from the perspective of the chain, Libra IDs do not exist and instead transactions are have a single-use ID to identify them. By contrast, from the viewpoint of both a user and the chain, a sub-address is an ephemeral user identifier that should be recycled frequently to preserve privacy, but appears on-chain and could thus be used to link payments if it isn't recycled upon each usage.")))),Object(i.b)("h1",{id:"user-story"},"User story"),Object(i.b)("p",null,"Below is an example of using Libra ID domain for transferring money from one user to another. "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Receiver shares their Libra ID with the sender (outside the scope of this document)"),Object(i.b)("li",{parentName:"ul"},"Sender enters receiver's Libra ID and other relevant information into their wallet application"),Object(i.b)("li",{parentName:"ul"},"Sender's wallet attempts to fetch the receiver's profile picture and full name along with a confirmation dialog"),Object(i.b)("li",{parentName:"ul"},"Sender confirms the identity of the recipient"),Object(i.b)("li",{parentName:"ul"},"Sender presses \u2018send\u2019 button"),Object(i.b)("li",{parentName:"ul"},"Receiver's account is credited the amount in the transaction"),Object(i.b)("li",{parentName:"ul"},"Receiver's wallet displays recent transactions and their senders")),Object(i.b)("h1",{id:"libra-id-format"},"Libra ID format"),Object(i.b)("p",null,"Libra ID is a string in format ",Object(i.b)("inlineCode",{parentName:"p"},"<user-id>$<libra-id-domain>"),"."),Object(i.b)("p",null,"Example: ",Object(i.b)("inlineCode",{parentName:"p"},"andrey$novi")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"user-id"),", identifies an account within a VASP:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Case insensitive"),Object(i.b)("li",{parentName:"ul"},"Regex: ",Object(i.b)("inlineCode",{parentName:"li"},"^[a-zA-Z0-9][a-zA-Z0-9-_+.]*$")),Object(i.b)("li",{parentName:"ul"},"Maximum length: 64 characters"),Object(i.b)("li",{parentName:"ul"},"Stored internally in the VASP. Not published on the chain, there is no way for an external entity to list all the users within VASP."),Object(i.b)("li",{parentName:"ul"},"Defined by the VASP - user selected, auto-generated, etc."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"libra-id-domain")," identifies a VASP:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Case insensitive"),Object(i.b)("li",{parentName:"ul"},"Regex: ",Object(i.b)("inlineCode",{parentName:"li"},"^[a-zA-Z0-9][a-zA-Z0-9-]+$")),Object(i.b)("li",{parentName:"ul"},"Maximum length: 63 characters"),Object(i.b)("li",{parentName:"ul"},"Association between libra id and VASP is published on the chain ")))),Object(i.b)("h2",{id:"libra-id-domains"},"Libra ID domains"),Object(i.b)("p",null,"Each Libra ID domain is associated with a single VASP. This information is stored on the block chain in a ",Object(i.b)("inlineCode",{parentName:"p"},"LibraIdDomains")," resource published in a parent VASP's on-chain account."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"resource struct LibraIdDomains {\n    domains: vector<LibraIdDomain>,\n}\n\nstruct LibraIdDomain {\n    domain: vector<u8>,  // Utf-8 encoded\n}\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Fields definition:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"domain")," - name of a Libra ID domain "))),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"LibraIdDomains")," resource can only be published into an account with ",Object(i.b)("inlineCode",{parentName:"li"},"Role == PARENT_VASP_ROLE_ID"),"."),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"LibraIdDomains")," contains a list of ",Object(i.b)("inlineCode",{parentName:"li"},"LibraIdDomain")," structs that are associated with a VASP. As such, it is possible to register more than one Libra ID Domain for a given VASP. We are providing this opportunity to support possible situations when two VASPs merge into one, or when a company wants to provide multiple wallet apps, while having only a single VASP parent account on the chain."),Object(i.b)("li",{parentName:"ul"},"Only special Treasury Compliance account (address ",Object(i.b)("inlineCode",{parentName:"li"},"0xB1E55ED"),") can manipulate LibraIdDomains resource:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Only TC account can create and publish ",Object(i.b)("inlineCode",{parentName:"li"},"LibraIdDomains")," resource"),Object(i.b)("li",{parentName:"ul"},"Only TC account can add, remove or update an ",Object(i.b)("inlineCode",{parentName:"li"},"LibraIdDomain")," within ",Object(i.b)("inlineCode",{parentName:"li"},"LibraIdDomains")," resource"))),Object(i.b)("li",{parentName:"ul"},"In order to register a Libra Id domain, a VASP needs to submit a request to Libra Association. LA will perform certain checks (out of scope of this document) before issuing an on-chain transaction to register a Libra Id Domain. These checks intend to mitigate irrelevant claims and enforce uniqueness"),Object(i.b)("li",{parentName:"ul"},"The Libra ID domain can be created as part of creating a ",Object(i.b)("inlineCode",{parentName:"li"},"ParentVASP")," account."),Object(i.b)("li",{parentName:"ul"},"An entity (potentially the Association) may at some point choose to expose an open source application(",Object(i.b)("em",{parentName:"li"},"Indexer"),") that will allow indexing available Libra IDs and could provide a convenient REST API for applications to fetch information about the domains. The API of such an indexer is out of scope of this RFC.")),Object(i.b)("h1",{id:"off-chain-protocol"},"Off-chain protocol"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"TODO: This section may change in the future as we update LIP 1")),Object(i.b)("img",{alt:"Payment flow",src:Object(b.a)("img/libra-id-flow.png")}),Object(i.b)("p",null,"In order to support peer-2-peer payments, VASPs need to implement two Libra ID endpoints:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Info endpoint")," for querying optional information about the receiver. VASPs can provide this endpoint to improve UX and security of payment, but they are not obligated to - VASPs may choose not to share any information about the user via this endpoint, including whether the user exists or not.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"For example"),": VASP can define a 'contact list' and only share information if the sender is in receiver's contacts"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Payment endpoint")," to perform actual money transfer.")),Object(i.b)("h2",{id:"info-endpoint"},"Info endpoint"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Info endpoint")," is used by the ",Object(i.b)("strong",{parentName:"p"},"Sender")," to request information about the ",Object(i.b)("strong",{parentName:"p"},"Receiver")," before submitting an actual payment."),Object(i.b)("p",null,"Info endpoint takes both sender and receiver Libra IDs as arguments. Receiver VASP might decide to share more(or less) information based on sender ID, for example if the wallet supports some kind of contact list, they might decide to share more information if the sender is in the contact list of the receiver."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Request:")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n   "sender": "<User Object>",\n   "receiver_id": "<Receiver Libra ID>"\n}\n')),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required?"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sender"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/libra/lip/blob/master/lips/lip-10.md#user-object"}),"User Object")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Y"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Information about the sender")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"receiver_id"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"str"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Y"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Libra ID of the receiver")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Response:")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n   "receiver": "<User Object>"\n}\n')),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required?"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"receiver"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/libra/lip/blob/master/lips/lip-10.md#user-object"}),"User Object")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Y"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Information about the receiver")))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Receiver Libra ID domain must belong to the Receiver VASP. Otherwise, Receiver VASP must return the ",Object(i.b)("inlineCode",{parentName:"li"},"400")," error code."),Object(i.b)("li",{parentName:"ul"},"Sender Libra ID must have a Libra ID domain that belongs to Sender VASP. If this is not the case, the Receiver VASP should return the ",Object(i.b)("inlineCode",{parentName:"li"},"400")," error code "),Object(i.b)("li",{parentName:"ul"},"Receiver VASP may optionally choose how much information to share based on the sender Libra ID. If Receiver VASP decides to not share data, it should return an empty ",Object(i.b)("inlineCode",{parentName:"li"},"User Object")," with only ",Object(i.b)("inlineCode",{parentName:"li"},"libra_id")," field set"),Object(i.b)("li",{parentName:"ul"},"If user is not found, the VASP should return error code ",Object(i.b)("inlineCode",{parentName:"li"},"404"),"  ")),Object(i.b)("h2",{id:"pay-endpoint"},"Pay endpoint"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"TODO: This endpoint is going to be merged into LIP 1")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Pay endpoint")," is used when a user is willing to make a money transfer."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Request:")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n   "sender": "<User Object>",\n   "receiver_id": "<Receiver_Libra_ID>",\n   "amount": "<amount>",\n   "currency": "<currency>"\n}\n')),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required?"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sender"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/libra/lip/blob/master/lips/lip-10.md#user-object"}),"User Object")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Y"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Information about the sender")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"receiver_id"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"str"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Y"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Libra ID of the receiver")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"amount"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"integer"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Y"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Amount of coins to transfer")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"currency"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"str"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Y"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of the coin")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Response:")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n   "receiver_address": "<Receiver VASP on-chain account address>",\n   "reference_id": "<Payment_Reference_ID>",\n   "receiver": "<User Object>"\n}\n')),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required?"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"receiver_address"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"str"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Y"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"On-chain account address for receiving the payment. This address must be encoded as a ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/libra/lip/blob/master/lips/lip-5.md#account-identifiers"}),"Bech32 account identifier")," ",Object(i.b)("strong",{parentName:"td"},"without")," subaddress")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"reference_id"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"str"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Y"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Reference ID to be included into payment metadata")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"receiver"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/libra/lip/blob/master/lips/lip-10.md#user-object"}),"User Object")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Y"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Information about the receiver")))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Pay endpoint is used to exchange details of the payment such as information about Sender and Receiver off the chain, and negotiate ",Object(i.b)("inlineCode",{parentName:"p"},"Payment_Reference_ID"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Once the sender learns Payment_Reference_ID, it will submit an on-chain transaction including the ",Object(i.b)("inlineCode",{parentName:"p"},"Payment_Reference_ID")," as a metadata. Receiver will use the ",Object(i.b)("inlineCode",{parentName:"p"},"Payment_Reference_ID")," in the transaction to link the on-chain transaction to the payment.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Sender will submit a transaction to the ",Object(i.b)("inlineCode",{parentName:"p"},"receiver_address")," on-chain account in the response. This account address can be either Parent VASP, or any of Child VASP accounts of the receiver VASP. This is needed to allow the receiver VASP to manage load between different on-chain accounts.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Payment_Reference_ID")," must be unique for each payment, it must not be reused in any way to avoid leaking privacy information on-chain.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Payment_Reference_ID")," returned by this endpoint is not signed for KYC purposes. This means that payment above KYC threshold can not be submitted right away using the provided Payment_Reference_ID. Instead, sender VASP needs to proceed to KYC endpoint to negotiate the signed Reference ID.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"KYC endpoint API will be updated to accept ",Object(i.b)("inlineCode",{parentName:"p"},"Payment_Reference_ID")," returned by the Libra ID endpoint instead of address/subaddress."))),Object(i.b)("h2",{id:"user-object"},"User Object"),Object(i.b)("p",null,"User Object defines reach information about the user."),Object(i.b)("p",null,"All fields, except for ",Object(i.b)("inlineCode",{parentName:"p"},"libra_id"),", in this object are optional - VASP can choose to share either of those fields or none."),Object(i.b)("p",null,"Additionally, all fields in this object are informational - ",Object(i.b)("strong",{parentName:"p"},"they must not be used for KYC and only intended for UI purposes"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n   "libra_id": "<Libra_ID>",\n   "display_name": "<Display name>",\n   "profile_picture": "<profile_picture_uri>"\n}\n')),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required?"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"libra_id"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"str"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Y"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Libra ID of the user")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"display_name"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"str"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Display name of the user. Usually a full name")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"profile_picture"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"str"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Profile picture URL(see below)")))),Object(i.b)("p",null,"If a user does not exist, VASP can choose to return an HTTP error, or the empty User Object, depending on it\u2019s privacy choices."),Object(i.b)("h2",{id:"profile-picture-uri"},"Profile Picture URI"),Object(i.b)("p",null,"Profile picture URI is a URI that represents a profile picture of a user. Wallet app must support two possible URI schemas for profile picture."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Https schema.")," If URI starts with https:, wallet must attempt to fetch profile picture from the HTTP URI provided. When fetching this URI wallet app will not provide any authentication. Wallet app will use GET method to fetch the profile picture specified using https schema.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Ex.: ",Object(i.b)("em",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"em"},{href:"https://novi.com/pictures/alice.png"}),"https://novi.com/pictures/alice.png"))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Data schema.")," If URI starts with data:, wallet must interpret the URI as a ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs"}),"Data URL")," that contains profile picture encoded.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Ex.: ",Object(i.b)("em",{parentName:"li"},"data:image/gif;base64,AAAAAAAA")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Unencrypted http")," schema must not be used to share profile pictures.")))}p.isMDXComponent=!0},200:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},p=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,b=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),p=s(a),d=n,m=p["".concat(b,".").concat(d)]||p[d]||u[d]||i;return a?r.a.createElement(m,c({ref:t},o,{components:a})):r.a.createElement(m,c({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,b=new Array(i);b[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var o=2;o<i;o++)b[o]=a[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},201:function(e,t,a){"use strict";var n=a(0),r=a(52);t.a=function(){return Object(n.useContext)(r.a)}},202:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a(206);var n=a(201);function r(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,a=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}},203:function(e,t,a){var n=a(78),r=a(26);e.exports=function(e,t,a){if(n(t))throw TypeError("String#"+a+" doesn't accept regex!");return String(r(e))}},204:function(e,t,a){var n=a(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[n]=!1,!"/./"[e](t)}catch(r){}}return!0}},206:function(e,t,a){"use strict";var n=a(12),r=a(24),i=a(203),b="".startsWith;n(n.P+n.F*a(204)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),a=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return b?b.call(t,n,a):t.slice(a,a+n.length)===n}})}}]);