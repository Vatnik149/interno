import React from 'react'
import howWorkpic1 from '../../../img/howWeWork/1.png'
import howWorkpic2 from '../../../img/howWeWork/2.png'
import howWorkpic3 from '../../../img/howWeWork/3.png'
import howWorkpic4 from '../../../img/howWeWork/4.png'


const HowWeWork = () => {
  return (
    <section className="howWeWork">
    <div className="howWeWork-top howWeWork__howWeWork-top">
        <h1 className="content__head howWeWork-top__content-head content__head__headOne">How We Work</h1>
        <p className="content__desc howWeWork-top__content-desc content__desc__largeDesc">It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points..</p>
    </div>
    <div className="work-steps howWeWork__work-steps">
        <div className="step howWeWork__step">
            <div className="pic-block step__pic-block">
                <img src={howWorkpic1} alt="" />
            </div>
            <div className="text-block step__text-block">
                <div className="icon-num text-block__icon-num" >
                    <svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M91.999 89.0322H89.0312V92H91.999V89.0322Z" fill="#CDA274"/>
                        <path d="M71.2258 14.8387V2.96774H47.4839V0H44.5161V2.96774H20.7742V35.0305L11.871 29.8907V29.6774H11.5037L11.1828 29.4919L11.0752 29.6774H0V50.4516C0 53.7254 2.66169 56.3871 5.93548 56.3871H20.7742V62.3226H33.8026L28.4606 89.0323H0V92H44.5161H47.4839H86.0645V89.0323H63.5394L58.1974 62.3226H71.2258V38.5806H83.0968V35.6129H80.5445L83.2303 24.8734L77.7289 17.9975C83.299 18.9731 87.5484 23.8328 87.5484 29.6774H90.5161C90.5161 24.8215 88.1605 20.5145 84.5417 17.8065H92V14.8387H71.2258ZM8.90323 50.4516C8.90323 52.0876 7.57145 53.4194 5.93548 53.4194C4.29952 53.4194 2.96774 52.0876 2.96774 50.4516V32.6452H8.90323V50.4516ZM19.8709 38.9794L22.8386 44.1173L13.2491 49.6559L19.1827 39.3764L19.8709 38.9794ZM11.871 34.2366L12.2698 33.5448L17.4077 36.5125L11.871 46.1057V34.2366ZM12.663 53.4194L22.9444 47.4839H23.7419V53.4194H12.663ZM44.5161 89.0323H31.4877L36.8297 62.3226H44.5161V89.0323ZM60.5123 89.0323H47.4839V62.3226H55.1703L60.5123 89.0323ZM68.1245 24.8734L70.8103 35.6129H68.2581V37.0968V38.5806V59.3548H23.7419V56.3871H26.7097V45.31L26.8933 45.2024L26.7097 44.8852V44.5161H26.4964L23.7419 39.7455V5.93548H68.2581V14.8387H59.3548V17.8065H66.8131C63.1944 20.5145 60.8387 24.8215 60.8387 29.6774H63.8065C63.8065 23.8328 68.0559 18.9731 73.626 17.9956L68.1245 24.8734ZM79.9955 25.5801L77.4877 35.6129H73.8671L71.3594 25.5782L74.1936 22.0355V28.1935H77.1613V22.0373L79.9955 25.5801Z" fill="#CDA274"/>
                        <path d="M32.6455 11.8709H29.6777V14.8387H32.6455V11.8709Z" fill="#CDA274"/>
                        <path d="M62.3232 50.4515H59.3555V53.4193H62.3232V50.4515Z" fill="#CDA274"/>
                        <path d="M59.3542 32.6451C59.3542 25.2814 53.3631 19.2903 45.9994 19.2903C43.5992 19.2903 41.3493 19.9357 39.3999 21.0486L35.3285 15.4507L32.9283 17.1961L37.0053 22.8015C34.3324 25.2443 32.6445 28.7462 32.6445 32.6451C32.6445 40.0088 38.6357 45.9999 45.9994 45.9999C48.3995 45.9999 50.6494 45.3545 52.5989 44.2416L56.6703 49.8395L59.0704 48.0941L54.9935 42.4887C57.6663 40.0459 59.3542 36.544 59.3542 32.6451ZM45.9994 43.0322C40.2735 43.0322 35.6123 38.371 35.6123 32.6451C35.6123 29.733 36.8216 27.0991 38.7599 25.2128L50.8424 41.8284C49.3937 42.5926 47.7485 43.0322 45.9994 43.0322ZM41.1564 23.4636C42.605 22.6976 44.2503 22.258 45.9994 22.258C51.7253 22.258 56.3865 26.9192 56.3865 32.6451C56.3865 35.5572 55.1771 38.1911 53.2388 40.0774L41.1564 23.4636Z" fill="#CDA274"/>
                        </svg>
                    <h3 className="content__num">
                        01
                    </h3>                
                </div>
                <h2 className="content__head step__content-head content__head__headTwo">Concept & Details</h2>
                <p className="content__desc step__content-desc content__desc__largeDesc">It is a long established fact  will be distracted.
                    Lorem Ipsum is simply dummy from text of the
                    and typesetting indufstry. </p>
            </div>
        </div>
        <div className="step howWeWork__step">
            <div className="text-block step__text-block">
                <div className="icon-num text-block__icon-num" >
                    <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M61.5 79.5H58.5V72V15C58.5 14.7 58.35 14.25 58.2 14.1L53.85 1.05C53.7 0.45 53.1 0 52.5 0C51.9 0 51.3 0.45 51.15 1.05L46.8 14.1C46.65 14.4 46.5 14.7 46.5 15V72V88.5C46.5 89.4 47.1 90 48 90H57C57.9 90 58.5 89.4 58.5 88.5V82.5H63C63.9 82.5 64.5 81.9 64.5 81V36H61.5V79.5ZM49.5 16.5H55.5V70.5H49.5V16.5ZM52.5 6.3L54.9 13.5H50.1L52.5 6.3ZM55.5 87H49.5V73.5H55.5V87Z" fill="#CDA274"/>
                        <path d="M88.5 0H72C71.1 0 70.5 0.6 70.5 1.5V88.5C70.5 89.4 71.1 90 72 90H88.5C89.4 90 90 89.4 90 88.5V1.5C90 0.6 89.4 0 88.5 0ZM87 87H73.5V76.5H81V73.5H73.5V61.5H81V58.5H73.5V46.5H81V43.5H73.5V31.5H81V28.5H73.5V16.5H81V13.5H73.5V3H87V87Z" fill="#CDA274"/>
                        <path d="M21 14.9996C9.45 14.9996 0 24.4496 0 35.9996C0 44.0996 4.65 51.4496 12 54.8996V65.9996V73.4996C12 74.3996 12.6 74.9996 13.5 74.9996H19.5V79.4996H22.5V74.9996H28.5C29.4 74.9996 30 74.3996 30 73.4996V65.9996V54.8996C37.35 51.4496 42 44.0996 42 35.9996C42 24.4496 32.55 14.9996 21 14.9996ZM27 71.9996H15V67.4996H27V71.9996ZM27.9 52.6496C27.3 52.7996 27 53.3996 27 53.9996V64.4996H15V61.4996H22.5V58.4996H15V53.9996C15 53.3996 14.7 52.7996 14.1 52.6496C7.35 49.7996 3 43.1996 3 35.9996C3 26.0996 11.1 17.9996 21 17.9996C30.9 17.9996 39 26.0996 39 35.9996C39 43.1996 34.65 49.7996 27.9 52.6496Z" fill="#CDA274"/>
                        <path d="M24.4512 27.4505L21.0012 30.9005L17.5512 27.4505L15.4512 29.5505L19.5012 33.6005V49.5005H22.5012V33.6005L26.5512 29.5505L24.4512 27.4505Z" fill="#CDA274"/>
                        </svg>
                        
                    <h3 className="content__num">
                        02
                    </h3>                
                </div>
                <h2 className="content__head step__content-head content__head__headTwo">Idea for Work</h2>
                <p className="content__desc step__content-desc content__desc__largeDesc">It is a long established fact  will be distracted.
                    Lorem Ipsum is simply dummy from text of the
                    and typesetting indufstry. </p>
            </div>
            <div className="pic-block step__pic-block">
                <img src={howWorkpic2} alt="" />
            </div>
        </div>
        <div className="step howWeWork__step">
            <div className="pic-block step__pic-block">
                <img src={howWorkpic3} alt="" />
            </div>
            <div className="text-block step__text-block">
                <div className="icon-num text-block__icon-num" >
                    <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M90 42.0968V38.4514L46.9216 7.25806H43.0784L33.3871 14.2748V8.70968H36.2903V0H7.25806V8.70968H10.1613V31.0935L0 38.4514V42.0968H7.25806V63.871H0V84.1936H7.25806V90H82.7419V59.5161C86.7448 59.5161 90 56.2609 90 52.2581C90 48.2552 86.7448 45 82.7419 45V42.0968H90ZM10.1613 2.90323H33.3871V5.80645H10.1613V2.90323ZM30.4839 8.70968V16.3778L13.0645 28.9923V8.70968H30.4839ZM5.80645 75.4839V81.2903H2.90323V66.7742H69.6774V81.2903H66.7742V75.4839H63.871V81.2903H60.9677V75.4839H58.0645V81.2903H55.1613V75.4839H52.2581V81.2903H49.3548V75.4839H46.4516V81.2903H43.5484V75.4839H40.6452V81.2903H37.7419V75.4839H34.8387V81.2903H31.9355V75.4839H29.0323V81.2903H26.129V75.4839H23.2258V81.2903H20.3226V75.4839H17.4194V81.2903H14.5161V75.4839H11.6129V81.2903H8.70968V75.4839H5.80645ZM79.8387 87.0968H10.1613V84.1936H72.5807V63.871H10.1613V42.0968H79.8387V45H27.1415L16.2544 52.2581L27.1415 59.5161H79.8387V87.0968ZM76.9355 47.9032V56.6129H74.0323V47.9032H76.9355ZM30.4839 50.8065V47.9032H71.129V50.8065H30.4839ZM71.129 53.7097V56.6129H30.4839V53.7097H71.129ZM27.5806 48.1972V56.3208L21.4875 52.2581L27.5806 48.1972ZM87.0968 52.2581C87.0968 54.6587 85.1425 56.6129 82.7419 56.6129H79.8387V47.9032H82.7419C85.1425 47.9032 87.0968 49.8575 87.0968 52.2581ZM81.2903 39.1936H79.8387H10.1613H8.70968H3.92661L44.0183 10.1613H45.9817L86.0734 39.1936H81.2903Z" fill="#CDA274"/>
                        <path d="M44.9996 14.5161C38.5962 14.5161 33.3867 19.7256 33.3867 26.129C33.3867 32.5324 38.5962 37.7419 44.9996 37.7419C51.403 37.7419 56.6125 32.5324 56.6125 26.129C56.6125 19.7256 51.403 14.5161 44.9996 14.5161ZM44.9996 34.8387C40.1966 34.8387 36.2899 30.932 36.2899 26.129C36.2899 21.326 40.1966 17.4193 44.9996 17.4193C49.8026 17.4193 53.7093 21.326 53.7093 26.129C53.7093 30.932 49.8026 34.8387 44.9996 34.8387Z" fill="#CDA274"/>
                        </svg>                        
                    <h3 className="content__num">
                        03
                    </h3>                
                </div>
                <h2 className="content__head step__content-head content__head__headTwo">Design</h2>
                <p className="content__desc step__content-desc content__desc__largeDesc">It is a long established fact  will be distracted.
                    Lorem Ipsum is simply dummy from text of the
                    and typesetting indufstry. </p>
            </div>
        </div>
        <div className="step howWeWork__step">
            <div className="text-block step__text-block">
                <div className="icon-num text-block__icon-num" >
                    <svg width="87" height="94" viewBox="0 0 87 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M87 20.5625V0H57.3407V32.3125H51.4088V49.9375H25.7053V67.5625H0V94H80.0801V32.3125H60.3066V20.5625H87ZM60.3066 2.9375H84.0341V17.625H60.3066V2.9375ZM28.6713 52.875H51.4107V57.7714H28.6713V52.875ZM2.96593 70.5H25.7053V75.3964H2.96593V70.5ZM77.1142 91.0625H2.96593V78.3339H25.7053V84.6991H28.6713V60.7089H51.4107V70.9902H54.3766V43.0839H77.1142V91.0625ZM77.1142 35.25V40.1464H54.3748V35.25H77.1142Z" fill="#CDA274"/>
                        <path d="M79.5859 5.875H72.666V8.8125H79.5859V5.875Z" fill="#CDA274"/>
                        <path d="M79.5855 11.75H64.7559V14.6875H79.5855V11.75Z" fill="#CDA274"/>
                        <path d="M32.131 10.7714V13.7089H40.4152L3.40039 50.3671L5.49879 52.4454L42.5117 15.7854V22.0312H45.4777V10.7714H32.131Z" fill="#CDA274"/>
                        <path d="M9.39145 81.2714H5.4375V84.2089H9.39145V81.2714Z" fill="#CDA274"/>
                        <path d="M23.2333 81.2714H19.2793V84.2089H23.2333V81.2714Z" fill="#CDA274"/>
                        <path d="M35.0965 63.6464H31.1426V66.5839H35.0965V63.6464Z" fill="#CDA274"/>
                        <path d="M48.9383 63.6464H44.9844V66.5839H48.9383V63.6464Z" fill="#CDA274"/>
                        <path d="M60.8016 46.0215H56.8477V48.959H60.8016V46.0215Z" fill="#CDA274"/>
                        <path d="M74.6415 46.0215H70.6875V48.959H74.6415V46.0215Z" fill="#CDA274"/>
                        </svg>
                    <h3 className="content__num">
                        04
                    </h3>                
                </div>
                <h2 className="content__head step__content-head content__head__headTwo">Perfection</h2>
                <p className="content__desc step__content-desc content__desc__largeDesc">It is a long established fact  will be distracted.
                    Lorem Ipsum is simply dummy from text of the
                    and typesetting indufstry. </p>
            </div>
            <div className="pic-block step__pic-block">
                <img src={howWorkpic4} alt="" />
            </div>
        </div>
    </div>
</section>
  )
}

export default HowWeWork
