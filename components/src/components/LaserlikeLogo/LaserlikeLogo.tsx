import React from 'react';
import { trueBlack, trueWhite } from '../../styles';

export enum LaserlikeLogoContentStyle {
  dark = 'dark',
  light = 'light',
}

export interface LaserlikeLogoProps {
  contentStyle?:
    | LaserlikeLogoContentStyle
    | keyof typeof LaserlikeLogoContentStyle;
}

export const LaserlikeLogo = ({
  contentStyle = LaserlikeLogoContentStyle.light,
}: LaserlikeLogoProps) => {
  const fillColor =
    contentStyle === LaserlikeLogoContentStyle.light ? trueWhite : trueBlack;
  return (
    <svg viewBox="0 0 225 46">
      <defs>
        <path
          d="M7,0 L1057,0 C1060.86599,-7.10171439e-16 1064,3.13400675 1064,7 L1064,519 C1064,522.865993 1060.86599,526 1057,526 L7,526 C3.13400675,526 4.73447626e-16,522.865993 0,519 L0,7 C-4.73447626e-16,3.13400675 3.13400675,7.10171439e-16 7,0 Z"
          id="path-1"
        ></path>
      </defs>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Artboard" transform="translate(-264.000000, -1729.000000)">
          <g id="laserlike" transform="translate(187.000000, 1608.000000)">
            <g
              id="Group-8"
              transform="translate(77.000000, 121.000000)"
              fill={fillColor}
            >
              <g id="Group-5">
                <g
                  id="Laserlike-Logo-White"
                  transform="translate(0.000000, -0.000000)"
                >
                  <g id="Group">
                    <path
                      d="M145.281713,0 C147.117185,0.549183846 148.885871,1.3003632 150.55521,2.23971012 C150.942567,3.88216421 150.133874,5.21920328 149.726129,6.58339035 C147.748568,13.2075027 145.866147,19.8451891 144.846785,26.7000594 C144.358506,29.6158761 144.278456,32.5853281 144.608934,35.5231599 C144.989496,38.5298011 146.436989,39.7243131 149.039759,39.5207031 C152.125027,39.2763711 154.034631,37.484603 154.129771,34.8512469 C154.27653,27.6630492 155.589285,20.5461652 158.016937,13.7776107 C160.157596,13.8522677 161.822553,14.9856968 163.827298,15.8747939 C162.814732,20.9243221 161.28569,25.7838144 160.728439,30.8061947 C160.539112,32.1560687 160.42793,33.5157283 160.395447,34.8783949 C160.395447,37.939332 161.251711,39.2695841 163.242864,39.5207031 C165.852429,39.8532661 169.032838,37.83074 169.440582,35.4077809 C170.120157,31.6138477 170.595859,27.7995535 171.146314,23.9920463 C172.233633,16.4788369 174.544186,9.2371075 176.120799,1.8392771 C176.249918,1.24202107 176.800373,0.73978304 177.276075,0.0542960029 C179.227386,0.568377408 181.094825,1.35918926 182.821402,2.40259813 C181.951547,6.57660335 180.218632,10.4044716 179.593424,14.6191988 C180.898206,15.5490178 181.992321,14.2662748 183.174781,13.9880077 C186.212478,13.2685857 189.182218,12.8477917 191.852946,14.9653358 C195.250818,17.6801359 195.543035,23.4287253 192.53252,27.1208535 C191.071435,28.9126215 189.073486,29.9917546 187.095925,31.3627287 C187.381346,33.9214278 187.809478,36.419044 189.895771,38.2854691 C191.982065,40.1518942 196.820635,39.6428691 198.431226,37.308141 C199.002068,36.486914 198.465205,35.7810659 198.349677,35.0412829 C197.485501,29.7911622 198.316128,24.4025978 200.721392,19.6551531 C202.930008,15.2300288 211.26159,12.0401386 216.05259,14.0558778 C221.985274,16.5534939 222.943474,24.0327683 218.716521,28.8583255 C216.093364,31.8446057 212.512007,32.8898038 208.699595,33.2427278 C207.585093,33.3445328 206.450204,33.2427278 205.301723,33.2427278 C205.723059,40.2536992 212.85859,41.4685722 221.713445,36.2154339 C223.160938,37.15204 224.010406,38.5976711 224.853078,40.0297281 C220.062079,46.3212775 209.481105,47.2443095 201.829098,42.0658283 C200.503928,42.0658283 199.688438,43.1856833 198.628302,43.7761523 C192.410197,47.2443095 186.429942,45.5679204 183.07964,39.3306671 C181.713142,36.7168898 180.866215,33.8636302 180.585602,30.9283607 C180.415709,29.3605636 180.775883,28.3560875 182.379679,27.8063405 C183.896121,27.2946833 185.28609,26.4664019 186.457125,25.3765944 C188.094899,23.8155843 188.774474,21.5283652 187.755112,20.2524091 C186.395963,18.50815 184.5815,18.827139 182.814606,19.573709 C179.887531,20.6999129 177.765214,23.2753519 177.221709,26.3607094 C176.093616,31.4645337 175.747033,36.663376 175.278126,41.8486442 C175.196577,42.7377413 175.149007,43.6336253 175.067458,44.7399064 C172.858841,44.8484984 170.704591,46.0158625 168.761008,44.0612064 C167.952314,43.2535533 167.27274,44.0612064 166.647531,44.3734084 C162.644838,46.1651765 158.947954,46.2194725 155.774341,42.5001963 L155.281994,42.7685087 C150.113268,45.5655542 144.975381,47.6519472 140.035398,42.1065503 C138.064633,42.9888603 136.399675,44.3937694 134.313382,45.0317474 C128.027319,46.9456815 123.365438,43.5657553 123.440192,37.057022 C123.440192,33.7449658 124.330434,30.5618626 124.901277,27.3380375 C125.675991,22.9332742 125.349796,22.4853322 120.490839,21.9695202 C119.940383,24.6843203 119.580209,27.4805645 118.683171,30.1139206 C115.557129,39.4256851 109.128355,44.8552854 100.368641,45.4593284 C90.0594974,46.2126855 83.9841024,40.4912442 84.1200172,30.1750036 C84.0985005,25.711122 85.6966656,21.3905373 88.6187997,18.012699 C90.7891127,15.3216885 93.9989703,13.6744376 97.4532668,13.4789827 C102.210288,13.2142897 105.744074,15.3725558 107.014879,19.397247 C108.47537,23.8794258 106.650643,28.7756637 102.611236,31.2134147 C100.21017,32.510343 97.5258398,33.1957147 94.796131,33.2087928 C93.6816289,33.2563018 92.5671269,33.2087928 91.398259,33.2087928 C91.9487142,37.023087 94.0214161,39.0524001 97.5484072,39.4664071 C103.664577,40.1790422 109.780746,36.3715349 112.655346,30.0664116 C113.55852,27.9876826 114.213164,25.8098617 114.605724,23.5780393 C115.013469,21.5419392 115.230933,19.8519761 113.103865,18.243457 C110.976797,16.6349379 111.411725,13.3907517 113.260167,11.9654816 C115.210546,10.4655546 117.942435,10.9067096 119.321971,13.4111127 C120.280171,15.1485848 121.666502,15.6779708 123.277094,16.1802089 C132.111561,18.942518 132.689199,19.9266331 130.630089,29.0755096 C130.086429,31.5052557 129.386468,33.9214278 129.488404,36.439405 C129.59034,38.9573821 130.711638,39.8329051 133.24645,39.3849631 C136.644322,38.7809201 138.044245,36.846625 138.003471,33.4124028 C137.928718,24.9490133 139.845117,16.7910389 142.148875,8.72129547 C142.998343,5.83682031 143.7051,2.86411415 145.281713,0 Z M94.6519111,20.5785328 C92.6965195,22.3159514 91.457654,24.7192149 91.1766076,27.3202417 C94.7947318,28.1433969 97.2226836,27.8984912 99.1065566,26.55151 C101.242066,25.0480613 101.840553,22.034361 100.357938,20.2860066 C98.9773378,18.6533022 96.6922067,18.7145286 94.6519111,20.5785328 Z M214.217791,20.2858746 C212.965504,18.804345 210.816771,18.6951078 208.989664,20.1698101 C206.66698,22.0074693 205.220433,24.7305117 205.000137,27.6798684 C208.31904,28.0212346 211.097338,27.6593864 213.444521,25.7477352 C215.223727,24.3276514 215.470078,21.7674043 214.217791,20.2858746 Z"
                      id="Combined-Shape"
                      fillRule="nonzero"
                    ></path>
                    <path
                      d="M30.343127,1.72007347 C29.9266214,3.73673654 29.2954226,5.70314003 28.4602932,7.58575446 C28.0728509,7.70116717 27.8553395,7.8437358 27.6582197,7.81657987 C21.9417462,7.00869094 20.2560323,8.16960697 19.5015393,13.9266642 C18.8693966,18.1629894 18.617899,22.4604154 18.1896733,26.7442635 C17.7843708,30.4442426 16.8457097,34.0662775 15.4028075,37.498012 C19.4811476,39.5890186 26.1628283,39.419294 30.927689,37.1314069 C31.0908227,33.587558 30.5946246,29.9282963 31.6957764,26.4048143 C32.0786012,24.9886072 32.5461853,23.596626 33.0960066,22.236379 C37.9220424,11.4147407 47.6624782,12.1004279 54.9627071,16.1738175 C56.3221538,16.9206056 56.0978451,17.8778521 55.8599419,19.0591351 C54.9158135,23.2591662 54.2819641,27.5228125 53.9635137,31.8156335 C53.8555502,33.2835691 53.8805751,34.758245 54.0382833,36.2216832 C54.5004952,39.5482847 56.7571768,40.5394762 59.6392038,38.6928729 C60.577222,38.0886534 61.3996873,37.3350764 62.2289498,36.6561781 C63.5883965,36.6561781 64.3428895,37.6134247 65.34888,38.0682865 C66.7898936,38.7471848 68.2037182,39.426083 69.8350542,39.5211288 C71.4663903,39.6161745 73.1792932,39.6297525 73.9133944,37.8103052 C74.6474956,35.9908578 73.3152378,34.8027859 71.9557911,33.8998512 C70.1681187,32.7049902 68.285285,31.6594869 66.5180042,30.4714149 C62.6571755,27.9187575 61.0802173,24.4020645 61.9706549,20.7020689 C62.8610925,17.0020734 66.3208844,14.0556549 70.5963444,13.5804261 C75.1368964,13.0712524 79.1268726,14.1371227 82.2060194,17.9864759 C81.3427707,19.6701436 79.7522181,20.5459223 78.3927713,21.7815172 C76.6186934,21.2180316 75.3340162,19.7448224 73.4851687,19.480052 C71.6363211,19.2152817 69.7262985,19.1541809 68.7746858,21.1365638 C67.8230731,23.1189467 69.4544091,24.2798628 70.8138559,25.2099534 C72.6830951,26.4727042 74.7630486,27.4435287 76.5983017,28.7470133 C79.5822872,30.8651759 81.1320565,33.7912274 80.7446142,37.5183789 C80.3571718,41.2455304 78.3180018,43.5673624 74.892196,44.7282785 C71.3264123,45.9764761 67.4131704,45.7815389 63.9894333,44.1851599 C62.9834427,43.730298 62.1337885,43.2007574 60.8287197,43.7710319 C54.4529146,46.5002029 53.3041821,46.2218546 48.6004964,41.4220439 C47.2410497,42.3589235 46.1466951,43.7031421 44.5833314,44.3956183 C41.3682399,45.8009377 38.2075262,46.1064419 35.1827573,44.11727 C34.1805563,43.3893741 32.8584374,43.2719371 31.7433571,43.8117658 C25.4695105,46.1539648 19.1005026,46.0453411 12.711103,44.2734166 C11.3516563,43.9000226 10.2233155,43.6284633 8.90465215,44.511031 C7.54490773,45.3697481 5.92061572,45.7096399 4.33011393,45.4682776 C1.8512643,45.193498 -0.018427137,43.0915491 0.000137036003,40.600577 C0.000137036003,38.0275526 1.69278729,36.2556281 4.4048835,35.902601 C5.76433022,35.7260875 7.36168012,36.683334 8.347279,35.6785646 C9.52320041,34.4904927 9.78829252,32.6506784 10.2301127,31.0145335 C11.460412,26.533805 11.7051124,21.856196 12.1401353,17.2328988 C12.3100662,15.3184057 12.4052275,13.3903346 12.6703196,11.4826305 C13.9685912,2.26319208 21.3028063,-1.8509314 30.343127,1.72007347 Z M48.1062414,23.4830173 C48.6780692,20.0074226 47.3642267,18.8375552 43.9128372,19.6673449 C42.1156639,20.0958429 41.0060456,21.3745352 40.121074,22.8572742 C38.3443232,25.8499584 37.6431533,29.1487126 37.500137,33.0596068 C37.4962056,34.365266 37.6936717,35.6637385 38.0856391,36.9092869 C39.1544126,39.8339556 41.6799856,40.4120877 43.9196446,38.2695979 C45.1978448,36.9716746 46.038032,35.3070296 46.3226831,33.5085094 C46.9830081,30.1757474 47.554836,26.8293823 48.1062414,23.4830173 Z"
                      id="Combined-Shape"
                      fillRule="nonzero"
                    ></path>
                    <path
                      d="M164.331076,0.00333092475 C167.036812,0.043989916 168.626432,1.61613758 168.524967,4.14377153 C168.418787,6.63657672 166.340741,8.58579862 163.850808,8.52816609 C161.607247,8.40913862 159.849939,6.55037172 159.853078,4.299631 C159.857688,3.1283553 160.337212,2.00923845 161.181615,1.1990978 C162.026017,0.388957153 163.162794,-0.0426469519 164.331076,0.00333092475 L164.331076,0.00333092475 Z"
                      id="Path"
                      fillRule="nonzero"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};