import * as React from 'react';
import Banner from '../components/Banner';
import { useParams } from 'react-router-dom';
import { INews } from '../models/INews';
import { ITeam } from '../models/ITeam';
import { useEffect, useState } from 'react';
import TeamsService from '../services/teams-service';
import Accordion from '../components/OurTeam/Accordion';

export interface ISingleProfessionalProps {
}

export default function SingleProfessional (props: ISingleProfessionalProps) {
  const { id } = useParams<string>();
  const [teams, setTeams] = useState<ITeam | null>(null);

  async function getTeams() {
    try {
      const response = await TeamsService.teamDeatails(`${id}`);
      setTeams(response.data[0]);
      console.log(teams);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getTeams();
  }, [id]);
  return (

    <>
    <Banner head='Professional Single' navigate='Home / Team Single'/>

      {teams && 
        (
          <div key={teams._id}>
                     <section className="miniProfile">
        <div className="picBlock miniProfile__picBlock">
            <img src={`../img/teams/${teams.img}`} alt="" />
        </div>
        <div className="textBlock miniProfile__textBlock">
            <h1 className="content__head miniProfile__content-head content__head__headOne">
                {teams.fio}
            </h1>
            <p className="content__desc miniProfile__position content__desc__large">{teams.position}</p>
            <p className="content__desc miniProfile__content-desc content__desc__large">{teams.biograph}</p>
            <table className="main-info miniProfile__main-info">
                <tr>
                <td className=""><h1 className="content__head miniProfile__content-head content__head__heaFour">
                    <svg width="52" height="52" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="36.851" cy="35.8959" r="35.8959" fill="#F4F0EC"/>
                        <path d="M25.8062 28.9924L36.8511 38.6567L47.896 28.9924M24.5846 24.8506H49.117C50.7299 24.8506 52.0375 26.1641 52.0375 27.7844V45.3872C52.0375 47.0075 50.7299 48.321 49.117 48.321H24.5846C22.9716 48.321 21.6641 47.0075 21.6641 45.3872V27.7844C21.6641 26.1641 22.9716 24.8506 24.5846 24.8506Z" stroke="#CDA274" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                
                    </h1></td>
                <td><p className="content__desc prices-content__desc content__desc__lerge">{teams.email}</p></td>
                </tr>
                <tr>
                    <td className=""><h1 className="content__head miniProfile__content-head content__head__heaFour">
                        <svg width="52" height="52" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="35.0816" cy="35.0816" r="35.0816" fill="#F4F0EC"/>
                            <path d="M46.0214 41.5504C45.0998 40.6219 42.8678 39.2669 41.7848 38.7208C40.3746 38.0105 40.2585 37.9525 39.15 38.7759C38.4107 39.3255 37.9191 39.8164 37.0538 39.6319C36.1885 39.4474 34.3081 38.4068 32.6617 36.7657C31.0152 35.1246 29.9143 33.1898 29.7291 32.3275C29.544 31.4651 30.0431 30.9794 30.5875 30.2383C31.3547 29.1938 31.2967 29.0197 30.6409 27.6095C30.1296 26.5127 28.735 24.3017 27.8029 23.3848C26.8059 22.4 26.8059 22.5741 26.1634 22.841C25.6404 23.0611 25.1386 23.3286 24.6644 23.6401C23.7358 24.257 23.2205 24.7694 22.8601 25.5395C22.4997 26.3096 22.3377 28.115 24.1989 31.4959C26.0601 34.8768 27.3659 36.6055 30.0686 39.3005C32.7714 41.9955 34.8496 43.4446 37.8878 45.1484C41.6461 47.2532 43.0877 46.8429 43.8602 46.4831C44.6326 46.1233 45.1474 45.6126 45.7655 44.6841C46.0779 44.2107 46.346 43.7095 46.5664 43.1869C46.8339 42.5468 47.008 42.5468 46.0214 41.5504Z" stroke="#CDA274" stroke-width="2" stroke-miterlimit="10"/>
                        </svg>  
                    </h1></td>
                <td><p className="content__desc prices-content__desc content__desc__lerge">{teams.phone}
                </p></td>
                </tr>
                <tr>
                    <td className=""><h1 className="content__head miniProfile__content-head content__head__heaFour">
                        <svg width="52" height="52" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="36.06" cy="35.8959" r="35.8959" fill="#F4F0EC"/>
                            <path d="M49.8659 36.5863C49.8659 28.5805 43.3752 22.0898 35.3695 22.0898C27.3637 22.0898 20.873 28.5805 20.873 36.5863C20.873 44.592 27.3637 51.0827 35.3695 51.0827C43.3752 51.0827 49.8659 44.592 49.8659 36.5863Z" stroke="#CDA274" stroke-width="2" stroke-miterlimit="10"/>
                            <path d="M49.1033 30.8305C47.9815 30.8375 48.0918 32.9193 46.6941 31.9371C46.1751 31.5731 45.8559 31.0441 45.2042 30.8832C44.6349 30.7427 44.0517 30.8888 43.4894 30.9865C42.8502 31.0975 42.0924 31.1474 41.6076 31.6343C41.1389 32.1029 40.8909 32.7317 40.3922 33.2032C39.4275 34.1165 39.0203 35.1135 39.6448 36.4049C40.2455 37.6464 41.5021 38.3202 42.8579 38.2316C44.19 38.1424 45.5737 37.3653 45.5353 39.3122C45.5213 40.0008 45.6645 40.4786 45.8748 41.1186C46.0697 41.7088 46.0564 42.2807 46.1011 42.8899C46.1835 44.0281 46.3917 45.304 46.9533 46.3094L48.001 44.8227C48.1303 44.6386 48.4006 44.3808 48.4648 44.1637C48.5787 43.7794 48.3545 43.1189 48.3286 42.6882C48.3028 42.2575 48.3154 41.8212 48.2497 41.3905C48.1575 40.787 47.8027 40.2214 47.7538 39.6249C47.6636 38.5141 47.8655 37.6274 47.0147 36.6986C46.1933 35.8028 44.9891 35.5878 43.8386 35.7697C43.2589 35.8611 40.9251 36.2363 41.8618 34.9034C42.047 34.6414 42.3704 34.4264 42.5785 34.177C42.7594 33.9599 42.9166 33.5608 43.1289 33.3915C43.3413 33.2221 44.3164 33.0275 44.5958 33.1139C44.8752 33.2003 45.1665 33.6057 45.4089 33.7856C45.8567 34.1249 46.3793 34.3505 46.9323 34.4432C47.8865 34.5838 49.8814 34.0259 49.866 32.7949C49.8632 32.2048 49.3184 31.3827 49.1033 30.8305ZM38.0585 40.9591C37.6862 39.3825 35.5564 38.8556 34.4081 38.0005C33.748 37.5087 33.1605 36.7492 32.2937 36.6873C31.8941 36.6585 31.5596 36.7457 31.1635 36.6424C30.8003 36.5482 30.5153 36.3515 30.1283 36.4028C29.4054 36.4983 28.9492 37.2754 28.1725 37.17C27.4356 37.0703 26.6763 36.2032 26.5087 35.4971C26.2935 34.5894 27.0074 34.295 27.7723 34.2142C28.0915 34.1805 28.4498 34.1439 28.7565 34.2613C29.1602 34.4123 29.3509 34.81 29.7134 35.0109C30.3931 35.3854 30.5307 34.7868 30.4266 34.1798C30.2708 33.2706 30.0892 32.8996 30.8953 32.2743C31.4541 31.8429 31.9319 31.531 31.8425 30.756C31.7894 30.3007 31.5414 30.0949 31.7726 29.6417C31.9479 29.2967 32.4292 28.9855 32.7428 28.7796C33.5524 28.2484 36.2109 28.2878 35.1247 26.8011C34.8055 26.3648 34.2167 25.5849 33.6579 25.4781C32.9594 25.3453 32.6492 26.1294 32.1624 26.4751C31.6594 26.8327 30.6801 27.2388 30.1765 26.6859C29.499 25.9418 30.6257 25.6973 30.875 25.1781C31.1244 24.6589 30.2974 23.6773 29.8545 23.4286L27.7723 25.7774C27.7124 26.1708 27.7333 26.5723 27.8334 26.9572C27.9336 27.3422 28.1111 27.7024 28.3548 28.0159C28.769 28.552 29.4284 28.7241 29.4585 29.4562C29.4878 30.1588 29.3788 30.5185 28.922 31.0125C28.7243 31.2232 28.5846 31.5225 28.3834 31.72C28.1369 31.961 28.2284 31.8872 27.8435 31.9532C27.1198 32.0762 26.5038 32.2659 25.8046 32.4598C24.6394 32.7837 24.5319 30.8691 24.001 30.118L22.2547 31.5366C22.2359 31.7692 22.5411 32.197 22.6243 32.45C23.1013 33.8952 24.0639 35.013 24.6855 36.3958C25.3401 37.86 27.0975 37.4539 27.8735 38.7368C28.5623 39.875 27.8267 41.3161 28.3422 42.5077C28.7166 43.3726 29.5995 43.5616 30.2086 44.1939C30.831 44.8326 30.8177 45.7066 30.9127 46.5378C31.0199 47.5154 31.1937 48.4845 31.4331 49.4381C31.5177 49.7676 31.5952 50.2032 31.8194 50.4751C31.9731 50.662 32.5005 50.8229 32.2874 50.8847C32.585 50.9339 33.1151 51.2136 33.3631 51.0084C33.69 50.7386 33.6027 49.9081 33.6593 49.5329C33.829 48.4158 34.385 47.3233 35.1352 46.4872C35.8763 45.6623 36.892 45.1038 37.5178 44.1686C38.1276 43.2566 38.3113 42.0264 38.0585 40.9591ZM35.7262 42.8084C35.3071 43.5609 34.3738 44.0646 33.7738 44.6625C33.6111 44.8248 33.2646 45.3869 33.0607 45.2654C32.9147 45.1782 32.8651 44.4489 32.8113 44.2817C32.5338 43.4397 32.0041 42.7046 31.2948 42.1774C31.0762 42.0109 30.5342 41.7945 30.4091 41.5662C30.2694 41.3182 30.3951 40.7329 30.4 40.4631C30.4077 40.0696 30.2296 39.4155 30.326 39.0579C30.4378 38.6455 30.2226 38.8942 30.5893 38.8127C30.7828 38.7691 31.5819 38.9104 31.8229 38.9609C32.2057 39.041 32.4166 39.2806 32.7184 39.523C33.5119 40.1631 34.3857 40.6584 35.2749 41.1488C35.9637 41.5325 36.1662 42.0179 35.7262 42.8084ZM30.8645 23.4497C31.1956 23.775 31.5072 24.16 32.001 24.1923C32.4683 24.224 32.9091 23.9696 33.317 24.2893C33.7696 24.6406 34.0958 25.0853 34.6966 25.1949C35.2777 25.301 35.8931 24.9596 36.037 24.3617C36.1767 23.7919 35.8756 23.1722 35.8575 22.6002C35.8575 22.5209 35.9001 22.1681 35.8456 22.1084C35.8051 22.0635 35.467 22.114 35.4153 22.1155C35.0367 22.1267 34.6591 22.1529 34.2823 22.1941C32.909 22.3437 31.5639 22.6903 30.2883 23.2235C30.458 23.3415 30.6711 23.3886 30.8645 23.4497ZM42.8747 27.3969C43.4677 27.3969 44.0698 27.1299 43.8784 26.4399C43.7178 25.8617 43.444 25.2343 42.7776 25.5462C42.3536 25.7444 41.7529 26.2488 41.7033 26.7491C41.6467 27.3168 42.4793 27.3969 42.8747 27.3969ZM42.4011 30.4159C43.0067 30.7806 43.905 30.6092 44.3618 30.0885C44.7187 29.681 44.929 28.9735 45.5709 28.9742C45.8535 28.9736 46.125 29.0849 46.3267 29.2841C46.5921 29.5602 46.5398 29.8194 46.5963 30.1651C46.7228 30.9415 47.5505 30.2094 47.7663 29.9087C47.906 29.7126 48.0953 29.4218 48.0318 29.1667C47.9731 28.9285 47.6965 28.6749 47.5735 28.4564C47.2145 27.8241 46.919 27.0884 46.3812 26.5777C45.8636 26.0858 45.2273 26.1427 44.7362 26.6535C44.3339 27.0751 43.8666 27.4088 43.5914 27.9217C43.3972 28.2822 43.1785 28.4543 42.7853 28.5477C42.5687 28.599 42.3215 28.618 42.1399 28.7641C41.6341 29.1646 41.9219 30.1265 42.4011 30.4159Z" fill="#CDA274"/>
                        </svg>                    
                    </h1></td>
                <td><p className="content__desc prices-content__desc content__desc__large">{teams.link}</p></td>
                </tr>
                <tr>
                    <td></td>
                </tr>
            </table>
            <div className="medialinks contactUs__medialinks">
                <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.18359 10.875L9.67578 7.64062H6.54688V5.53125C6.54688 4.61719 6.96875 3.77344 8.375 3.77344H9.81641V0.996094C9.81641 0.996094 8.51562 0.75 7.28516 0.75C4.71875 0.75 3.03125 2.33203 3.03125 5.14453V7.64062H0.148438V10.875H3.03125V18.75H6.54688V10.875H9.18359Z" fill="#292F36"/>
                </svg>
                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.1367 4.09375C16.8398 3.56641 17.4727 2.93359 17.9648 2.19531C17.332 2.47656 16.5938 2.6875 15.8555 2.75781C16.6289 2.30078 17.1914 1.59766 17.4727 0.71875C16.7695 1.14062 15.9609 1.45703 15.1523 1.63281C14.4492 0.894531 13.5 0.472656 12.4453 0.472656C10.4062 0.472656 8.75391 2.125 8.75391 4.16406C8.75391 4.44531 8.78906 4.72656 8.85938 5.00781C5.80078 4.83203 3.05859 3.35547 1.23047 1.14062C0.914062 1.66797 0.738281 2.30078 0.738281 3.00391C0.738281 4.26953 1.37109 5.39453 2.39062 6.0625C1.79297 6.02734 1.19531 5.88672 0.703125 5.60547V5.64062C0.703125 7.43359 1.96875 8.91016 3.65625 9.26172C3.375 9.33203 3.02344 9.40234 2.70703 9.40234C2.46094 9.40234 2.25 9.36719 2.00391 9.33203C2.46094 10.8086 3.83203 11.8633 5.44922 11.8984C4.18359 12.8828 2.60156 13.4805 0.878906 13.4805C0.5625 13.4805 0.28125 13.4453 0 13.4102C1.61719 14.4648 3.55078 15.0625 5.66016 15.0625C12.4453 15.0625 16.1367 9.47266 16.1367 4.58594C16.1367 4.41016 16.1367 4.26953 16.1367 4.09375Z" fill="#292F36"/>
                </svg>
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.64062 16.5V5.98828H0.371094V16.5H3.64062ZM1.98828 4.58203C3.04297 4.58203 3.88672 3.70312 3.88672 2.64844C3.88672 1.62891 3.04297 0.785156 1.98828 0.785156C0.96875 0.785156 0.125 1.62891 0.125 2.64844C0.125 3.70312 0.96875 4.58203 1.98828 4.58203ZM15.8398 16.5H15.875V10.7344C15.875 7.92188 15.2422 5.74219 11.9375 5.74219C10.3555 5.74219 9.30078 6.62109 8.84375 7.42969H8.80859V5.98828H5.67969V16.5H8.94922V11.2969C8.94922 9.92578 9.19531 8.625 10.8828 8.625C12.5703 8.625 12.6055 10.1719 12.6055 11.4023V16.5H15.8398Z" fill="#292F36"/>
                </svg>
                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5 4.60742C6.125 4.60742 4.23242 6.53711 4.23242 8.875C4.23242 11.25 6.125 13.1426 8.5 13.1426C10.8379 13.1426 12.7676 11.25 12.7676 8.875C12.7676 6.53711 10.8379 4.60742 8.5 4.60742ZM8.5 11.6582C6.97852 11.6582 5.7168 10.4336 5.7168 8.875C5.7168 7.35352 6.94141 6.12891 8.5 6.12891C10.0215 6.12891 11.2461 7.35352 11.2461 8.875C11.2461 10.4336 10.0215 11.6582 8.5 11.6582ZM13.918 4.45898C13.918 3.90234 13.4727 3.45703 12.916 3.45703C12.3594 3.45703 11.9141 3.90234 11.9141 4.45898C11.9141 5.01562 12.3594 5.46094 12.916 5.46094C13.4727 5.46094 13.918 5.01562 13.918 4.45898ZM16.7383 5.46094C16.6641 4.125 16.3672 2.9375 15.4023 1.97266C14.4375 1.00781 13.25 0.710938 11.9141 0.636719C10.541 0.5625 6.42188 0.5625 5.04883 0.636719C3.71289 0.710938 2.5625 1.00781 1.56055 1.97266C0.595703 2.9375 0.298828 4.125 0.224609 5.46094C0.150391 6.83398 0.150391 10.9531 0.224609 12.3262C0.298828 13.6621 0.595703 14.8125 1.56055 15.8145C2.5625 16.7793 3.71289 17.0762 5.04883 17.1504C6.42188 17.2246 10.541 17.2246 11.9141 17.1504C13.25 17.0762 14.4375 16.7793 15.4023 15.8145C16.3672 14.8125 16.6641 13.6621 16.7383 12.3262C16.8125 10.9531 16.8125 6.83398 16.7383 5.46094ZM14.957 13.7734C14.6973 14.5156 14.1035 15.0723 13.3984 15.3691C12.2852 15.8145 9.6875 15.7031 8.5 15.7031C7.27539 15.7031 4.67773 15.8145 3.60156 15.3691C2.85938 15.0723 2.30273 14.5156 2.00586 13.7734C1.56055 12.6973 1.67188 10.0996 1.67188 8.875C1.67188 7.6875 1.56055 5.08984 2.00586 3.97656C2.30273 3.27148 2.85938 2.71484 3.60156 2.41797C4.67773 1.97266 7.27539 2.08398 8.5 2.08398C9.6875 2.08398 12.2852 1.97266 13.3984 2.41797C14.1035 2.67773 14.6602 3.27148 14.957 3.97656C15.4023 5.08984 15.291 7.6875 15.291 8.875C15.291 10.0996 15.4023 12.6973 14.957 13.7734Z" fill="#292F36"/>
                </svg>                         
            </div>
        </div>
      </section>
          <section className="shortBio">
          <h1 className="content__head shortBio__content-head content__head__headOne">
              Short Biography​
          </h1>
          <p className="content__desc shortBio__desc content__desc__large">{teams.biograph}.</p>
      </section>
          <section className="funcQuestAndAnsw">
          <div className="functional">
              <h2 className="content__head functional__content-head content__head__headThree">
                  Simplicity and Functionality
              </h2>
              <p className="content__desc functional__content-desc content__desc__large">{teams.simpleFunc}</p>
                  <div className="project-slider project-slider__functional">
                      <div className="percentage project-slider__percentage percentage__65">
                          <p className="content__desc percentage__content-desc content__desc__bold">
                              Project Design
                          </p>
                          <p className="content__desc percentage__content-desc content__desc__procent">
                              65%
                          </p>
                      </div>
                      <input type="range" className="slider" id="percentageSlider" min="0" max="100" value="65"/>
                  </div>
                  <div className="project-slider project-slider__functional project-slider__95">
                      <div className="percentage project-slider__percentage percentage__95">
                          <p className="content__desc percentage__content-desc content__desc__bold">
                              Project Design
                          </p>
                          <p className="content__desc percentage__content-desc content__desc__procent">
                              95%
                          </p>
                      </div>
                      <input type="range" className="slider slider__95" id="percentageSlider" min="0" max="100" value="95"/>
                  </div>
                  <div className="project-slider project-slider__functional project-slider__75">
                      <div className="percentage project-slider__percentage percentage__75">
                          <p className="content__desc percentage__content-desc content__desc__bold">
                              Project Design
                          </p>
                          <p className="content__desc percentage__content-desc content__desc__procent">
                              75%
                          </p>
                      </div>
                      <input type="range" className="slider slider__75" id="percentageSlider" min="0" max="100" value="75"/>
                  </div>
                  
              </div>
          <div className="questAnsw">
              <h2 className="content__head questAnsw__content-head content__head__headThree">
                  Qustion And Answer
              </h2>
              <p className="content__desc questAnsw__desc content__desc__large">{teams.threequestdesc}</p>
                  <Accordion head={teams.firstquesthead} desc={teams.firstquestdesc}/>
                  <Accordion head={teams.secondquesthead} desc={teams.secondquestdesc}/>
                  <Accordion head={teams.threequesthead} desc={teams.threequestdesc}/>
              </div>
      </section>
          <section className="people container__full">
          <h2 className="content__head people__content-head content__head__headOne">
              Our Team Members
          </h2>
          <div className="people-items people__people-items">
              <div className="item">
                  <img src="../img/about/people/1.png" alt="" />
              </div>
              <div className="item">
                  <img src="../img/about/people/2.png" alt="" />
              </div>
              <div className="item">
                  <img src="../img/about/people/3.png" alt="" />
              </div>
              <div className="item">
                  <img src="../img/about/people/4.png" alt="" />
              </div>
          </div>
      </section>
          <section className="quest-form about__quest-form">
          <h1 className="content__head quest-form__content-head content__head__headOne" style={{textAlign: "center"}}>Contact Me</h1>
          <form action="" method="post">
              <div className="name-email">
              <div className="input-block">
                  <input className="input" type="text" name="name" id="name" placeholder="Name"/>
              </div>
              <div className="input-block">
                  <input className="input" type="text"  name="email" id="email" placeholder="Email"/>
              </div>
              </div>
              <div className="input-block">
                  <textarea className="input" name="desc" id="desc"  placeholder="Sent Your Message"></textarea>
              </div>
              <div className="saveme">
                  <input className="checkbox" type="checkbox" name="checkbox" id="checkbox"/>
                  <p className="content__desc saveme__desc content__desc__saveme">Save my name, email, and website in this browser for the next time I comment.</p>
              </div> 
              <button className="button about-form__botton button__default" style={{marginTop:"20px"}}>
                  Send Now
                  <i>
                      <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.58984 14.9353L20.313 14.7984M15.208 8.41125L21.731 14.9342L15.0766 21.5886" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                          </svg>
                  </i>
              </button>
          </form>
      </section>
          </div>
        )
      }
    </>
  );
}
