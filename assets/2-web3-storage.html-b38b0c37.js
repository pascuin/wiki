import{_ as r,r as a,o as n,c as s,b as t,e,d as i,a as l}from"./app-11f6603b.js";const d={},c=t("h1",{id:"web3-storage",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#web3-storage","aria-hidden":"true"},"#"),e(" Web3 Storage")],-1),h={href:"https://ipfs.tech/",target:"_blank",rel:"noopener noreferrer"},p={href:"https://crust.network/",target:"_blank",rel:"noopener noreferrer"},f=l('<p>To streamline the development experience, Apillon Web3 Storage service further introduces the concept of storage buckets.</p><h2 id="storage-bucket" tabindex="-1"><a class="header-anchor" href="#storage-bucket" aria-hidden="true">#</a> Storage bucket</h2><p>A storage bucket is a virtual container that holds directories and files in a hierarchical structure. Each directory can contain multiple subdirectories and multiple files, and so on for each subdirectory.</p><p>Before using the Apillon Web3 Storage service, a storage bucket should be created on the Apillon Dashboard. Once ready, it enables file storage from both the Apillon dashboard and the API endpoints.</p><h2 id="file-storage" tabindex="-1"><a class="header-anchor" href="#file-storage" aria-hidden="true">#</a> File storage</h2><p>The process below describes how files are stored with Apillon storage buckets.</p><ol><li>Uploaded files land on a reputable centralized cloud provider to ensure fast file capture.</li><li>Once the files are received, they proceed to the decentralized Apillon IPFS gateway, where Crust Network initiates the pinning and replication process.</li><li>Once the files are accessible on the IPFS network, Crust spreads them through multiple IPFS nodes globally, ensuring file distribution and decentralized accessibility.</li></ol><h2 id="file-deletion" tabindex="-1"><a class="header-anchor" href="#file-deletion" aria-hidden="true">#</a> File deletion</h2><p>Each file hosting that passes through Crust’s pinning and replication service is paid upfront for a minimum period of 6 months. Apillon has no control over amending that period, so keep in mind that all files you deploy to Apillon storage buckets will remain accessible for that period of time.</p><p>If you decide to delete a file before the 6-month period expires, the file is marked for deletion. This means that Apillon does not extend the storage lease on Crust once the 6-month period expires, which leads to file deletion on all IPFS instances.</p><p>However, to make the storage service more dynamic, Apillon artificially lowers the file deletion period to 3 months. Once this period expires, the load of deleted files in your storage bucket is emptied, and the storage capacity is made available for uploading new files.</p><p><strong>Note:</strong> These limitations are in the nature of the Apillon Closed Beta release, which is intended for testing purposes only. Once the Beta period is up, the limitations of Apillon Web3 services will be adjusted to more realistic production requirements.</p>',12),u={href:"https://blog.apillon.io/faq-apillon-web3-storage-c99a9b0e8b12",target:"_blank",rel:"noopener noreferrer"};function b(g,m){const o=a("ExternalLinkIcon");return n(),s("div",null,[c,t("p",null,[e("Apillon Web3 Storage is a Web3-based storage service that implements AWS S3 (as cache to optimize upload of large files), "),t("a",h,[e("IPFS"),i(o)]),e(", and "),t("a",p,[e("Crust Network"),i(o)]),e(" (to pin files on multiple IPFS nodes).")]),f,t("p",null,[e("Learn more: "),t("a",u,[e("Web3 Storage FAQ"),i(o)])])])}const k=r(d,[["render",b],["__file","2-web3-storage.html.vue"]]);export{k as default};
