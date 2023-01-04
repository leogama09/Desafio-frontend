import React, { Component } from 'react'

import icon1 from '../../assets/icon+text1.png'
import icon2 from '../../assets/icon+text2.png'
import icon3 from '../../assets/icon+text3.png'
import icon4 from '../../assets/icon+text4.png'

class Articlemobile extends Component {
    render() {
        return (
            <>
            <article>
                <div className="lesson">
                    <img src={group8} alt="" />
                    <input type="image" src={disabled} />
                </div>

                <div className="courses">
                  <h3>MÁS CURSOS</h3>
                    <ul>
                      <li><input type="image" src={desktop1} /></li>
                      <li><input type="image" src={desktop2} /></li>
                      <li><input type="image" src={desktop3} /></li>
                    </ul>
                </div>

                <div className="form">
                  <h3>OBTÉN MÁS INFORMACiÓN</h3>
                  <form>
                    <label>
                      <input type="text" id="displayName" className="box-name" required placeholder="NOMBRE COMPLETO" />
                    </label>
                    <label>
                      <input type="email" id="email" className="box-email" required placeholder="CORREO ELECTRÔNICO" />
                    </label>
                    <label>
                      <select className="box-country">
                        <option>PAÍS/CÓDIGO PAÍS</option>
                        <option>Afeganistão: 93</option>
                        <option>África do Sul: 27</option>
                        <option>Albânia: 355</option>
                        <option>Alemanha: 49</option>
                        <option>Andorra: 376</option>
                        <option>Angola: 244</option>
                        <option>Anguilla: 1</option>
                        <option>Antígua e Barbuda: 1</option>
                        <option>Antilhas Holandesas: 599</option>
                        <option>Arábia Saudita: 966</option>
                        <option>Argélia: 213</option>
                        <option>Argentina: 54</option>
                        <option>Armênia: 374</option>
                        <option>Aruba: 297</option>
                        <option>Ascensão: 247</option>
                        <option>Austrália: 61</option>
                        <option>Áustria: 43</option>
                        <option>Azerbaidjão: 994</option>
                        <option>Bahamas: 1</option>
                        <option>Bangladesh: 880</option>
                        <option>Barbados: 1</option>
                        <option>Barein: 973</option>
                        <option>Bélgica: 32</option>
                        <option>Belize: 501</option>
                        <option>Benim: 229</option>
                        <option>Bermudas: 1</option>
                        <option>Bielorrússia: 375</option>
                        <option>Bolívia: 591</option>
                        <option>Bósnia e Herzegovina: 387</option>
                        <option>Botswana: 267</option>
                        <option>Brasil: 55</option>
                        <option>Brunei: 673</option>
                        <option>Bulgária: 359</option>
                        <option>Burkina Faso: 226</option>
                        <option>Burundi: 257</option>
                        <option>Butão: 975</option>
                        <option>Cabo Verde: 238</option>
                        <option>Camarões: 237</option>
                        <option>Camboja: 855</option>
                        <option>Canadá: 1</option>
                        <option>Cazaquistão: 7</option>
                        <option>Chade: 237</option>
                        <option>Chile: 56</option>
                        <option>Chipre: 357</option>
                        <option>Colômbia: 57</option>
                        <option>Comores: 269</option>
                        <option>Congo-Brazzaville: 242</option>
                        <option>Congo-Kinshasa: 243</option>
                        <option>Coreia do Norte: 850</option>
                        <option>Coreia do Sul: 82</option>
                        <option>Costa do Marfim: 225</option>
                        <option>Costa Rica: 506</option>
                        <option>Croácia: 385</option>
                        <option>Cuba: 53</option>
                        <option>Dinamarca: 45</option>
                        <option>Djibuti: 253</option>
                        <option>Dominica: 1</option>
                        <option>Egito: 20</option>
                        <option>El Salvador: 503</option>
                        <option>Emirados Árabes Unidos: 971</option>
                        <option>Equador: 593</option>
                        <option>Eritreia: 291</option>
                        <option>Eslováquia: 421</option>
                        <option>Eslovênia: 386</option>
                        <option>Espanha: 34</option>
                        <option>Estados Federados da Micronésia: 691</option>
                        <option>Estados Unidos: 1</option>
                        <option>Estonia: 372</option>
                        <option>Etiópia: 251</option>
                        <option>Fiji: 679</option>
                        <option>Filipinas: 63</option>
                        <option>Finlândia: 358</option>
                        <option>França: 33</option>
                        <option>Gabão: 241</option>
                        <option>Gambia: 220</option>
                        <option>Gana: 233</option>
                        <option>Geórgia: 995</option>
                        <option>Gibraltar: 350</option>
                        <option>Granada: 1</option>
                        <option>Grécia: 30</option>
                        <option>Groenlândia: 299</option>
                        <option>Guadalupe: 590</option>
                        <option>Guam: 671</option>
                        <option>Guatemala: 502</option>
                        <option>Guiana: 592</option>
                        <option>Guiana Francesa: 594</option>
                        <option>Guiné: 224</option>
                        <option>Guiné-Bissau: 245</option>
                        <option>Guiné Equatorial: 240</option>
                        <option>Haiti: 509</option>
                        <option>Honduras: 504</option>
                        <option>Hong Kong: 852</option>
                        <option>Hungria: 36</option>
                        <option>Iêmen: 967</option>
                        <option>Ilhas Cayman: 1</option>
                        <option>Ilha Christmas: 672</option>
                        <option>Ilhas Cocos: 672</option>
                        <option>Ilhas Cook: 682</option>
                        <option>Ilhas Féroe: 298</option>
                        <option>Ilha Heard e Ilhas McDonald: 672</option>
                        <option>Maldivas: 960</option>
                        <option>Ilhas Malvinas: 500</option>
                        <option>Ilhas Marianas do Norte: 1</option>
                        <option>Ilhas Marshall: 692</option>
                        <option>Ilha Norfolk: 672</option>
                        <option>Ilhas Salomão: 677</option>
                        <option>Ilhas Virgens Americanas: 1</option>
                        <option>Ilhas Virgens Britânicas: 1</option>
                        <option>Índia: 91</option>
                        <option>Indonésia: 62</option>
                        <option>Irã: 98</option>
                        <option>Iraque: 964</option>
                        <option>Irlanda: 353</option>
                        <option>Islândia: 354</option>
                        <option>Israel: 972</option>
                        <option>Itália: 39</option>
                        <option>Jamaica: 1</option>
                        <option>Japão: 81</option>
                        <option>Jordânia: 962</option>
                        <option>Kiribati: 686</option>
                        <option>Kosovo: 383</option>
                        <option>Kuwait: 965</option>
                        <option>Laos: 856</option>
                        <option>Lesoto: 266</option>
                        <option>Letônia: 371</option>
                        <option>Líbano: 961</option>
                        <option>Libéria: 231</option>
                        <option>Líbia: 218</option>
                        <option>Liechtenstein: 423</option>
                        <option>Lituânia: 370</option>
                        <option>Luxemburgo: 352</option>
                        <option>Macau: 853</option>
                        <option>Madagascar: 261</option>
                        <option>Malásia: 60</option>
                        <option>Malawi: 265</option>
                        <option>Mali: 223</option>
                        <option>Malta: 356</option>
                        <option>Marrocos: 212</option>
                        <option>Martinica: 596</option>
                        <option>Maurícia: 230</option>
                        <option>Mauritânia: 222</option>
                        <option>Mayotte: 269</option>
                        <option>México: 52</option>
                        <option>Moçambique: 258</option>
                        <option>Moldávia: 373</option>
                        <option>Mônaco: 377</option>
                        <option>Mongólia: 976</option>
                        <option>Montenegro: 382</option>
                        <option>Montserrat: 1</option>
                        <option>Myanmar: 95</option>
                        <option>Namíbia: 264</option>
                        <option>Nauru: 674</option>
                        <option>Nepal: 977</option>
                        <option>Nicarágua: 505</option>
                        <option>Níger: 227</option>
                        <option>Nigéria: 234</option>
                        <option>Niue: 683</option>
                        <option>Noruega: 47</option>
                        <option>Nova Caledônia: 687</option>
                        <option>Nova Zelândia: 64</option>
                        <option>Omã: 968</option>
                        <option>Países Baixos: 31</option>
                        <option>Palau: 680</option>
                        <option>Palestina: 970</option>
                        <option>Panamá: 507</option>
                        <option>Papua-Nova Guiné: 675</option>
                        <option>Paquistão: 92</option>
                        <option>Paraguai: 595</option>
                        <option>Peru: 51</option>
                        <option>Polinésia Francesa: 689</option>
                        <option>Polônia: 48</option>
                        <option>Porto Rico: 1</option>
                        <option>Portugal: 351</option>
                        <option>Qatar: 974</option>
                        <option>Quênia: 254</option>
                        <option>Quirguistão: 996</option>
                        <option>Reino Unido: 44</option>
                        <option>República Centro-Africana: 236</option>
                        <option>República da China: 886</option>
                        <option>República Popular da China: 86</option>
                        <option>República Dominicana: 1</option>
                        <option>República da Macedônia: 389</option>
                        <option>República Tcheca: 420</option>
                        <option>Reunião: 262</option>
                        <option>Romênia: 40</option>
                        <option>Ruanda: 250</option>
                        <option>Rússia: 7</option>
                        <option>Saara Ocidental: 212</option>
                        <option>Samoa: 685</option>
                        <option>amoa Americana: 1</option>
                        <option>Santa Helena (território): 290</option>
                        <option>Santa Lúcia: 1</option>
                        <option>São Cristóvão e Nevis: 1</option>
                        <option>São Marinho: 378</option>
                        <option>Saint-Pierre e Miquelon: 508</option>
                        <option>São Tomé e Príncipe: 239</option>
                        <option>São Vicente e Granadinas: 1</option>
                        <option>Seicheles: 248</option>
                        <option>Senegal: 221</option>
                        <option>Serra Leoa: 232</option>
                        <option>Sérvia: 381</option>
                        <option>Singapura: 65</option>
                        <option>Síria: 963</option>
                        <option>Somália: 252</option>
                        <option>Sri Lanka: 94</option>
                        <option>Suazilândia: 268</option>
                        <option>Sudão: 249</option>
                        <option>Sudão do Sul: 211</option>
                        <option>Suécia: 46</option>
                        <option>Suíça: 41</option>
                        <option>Suriname: 597</option>
                        <option>Tadjiquistão: 992</option>
                        <option>Tailândia: 66</option>
                        <option>Tanzânia: 255</option>
                        <option>Território Britânico do Oceano Índico: 246</option>
                        <option>Timor-Leste: 670</option>
                        <option>Togo: 228</option>
                        <option>Tokelau: 690</option>
                        <option>Tonga: 676</option>
                        <option>Trinidad e Tobago: 1</option>
                        <option>Tunísia: 216</option>
                        <option>Turcas e Caicos: 1</option>
                        <option>Turquemenistão: 993</option>
                        <option>Turquia: 90</option>
                        <option>Tuvalu: 688</option>
                        <option>Ucrânia: 380</option>
                        <option>Uganda: 256</option>
                        <option>Uruguai: 598</option>
                        <option>Uzbequistão: 998</option>
                        <option>Vanuatu: 678</option>
                        <option>Vaticano: 379</option>
                        <option>Venezuela: 58</option>
                        <option>Vietnã: 84</option>
                        <option>Wallis e Futuna: 681</option>
                        <option>Zâmbia: 260</option>
                        <option>Zimbábue: 263</option>
                      </select>
                    </label>
                    <label>
                      <input type="text" id="cellphone" className="box-cellphone" placeholder="TELÉFONO" />
                    </label>
                    <label>
                      <input type="checkbox" data-indice="0" className="box-check1" />
                      <p className="checkbox1">Acepto las condiciones de uso y protección de datos.</p>
                    </label>
                    <label>
                      <input type="checkbox" data-indice="0" className="box-check2" />
                      <p className="checkbox2">Me gustaría recibir información sobre 
                        nuevos cursos, ofertas y promociones</p>
                    </label>
                    <input type="image" className="button" src={default1} alt="submit" />
                  </form>
                </div>
            </article>
            </>
        )
    }
}

export default Articlemobile