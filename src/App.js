import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { DataStore } from '@aws-amplify/datastore';
import { SurveyResult } from './models';
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { themeJson } from "./theme";
Amplify.configure(awsconfig);

const imageUrls = [
  "https://i.ibb.co/JQHXS3B/70002-103-93447502519-1-31045889981574.jpg",
  "https://i.ibb.co/88FvCPY/70114-103-919562625069-1-33231223949169.jpg",
  "https://i.ibb.co/jZbyMGH/71249-103-85602157866-1-3293170056694.jpg",
  "https://i.ibb.co/7zrC4py/71678-103-815241825193-1-30676779125343.jpg",
  "https://i.ibb.co/k46SLHf/71774-103-884309032135-1-30435508987749.jpg",
  "https://i.ibb.co/DCfkKKS/73369-103-847552283632-1-38035217285434.jpg",
  "https://i.ibb.co/wy0Py5W/73404-103-883552692804-1-36778031509833.jpg",
  "https://i.ibb.co/fqTZyK2/73416-103-854285492038-1-33353800630166.jpg",
  "https://i.ibb.co/x3GCvxb/73665-103-863864779317-1-27966559925583.jpg",
  "https://i.ibb.co/bQYzBQ0/73842-103-883195938775-1-30506770486645.jpg",
  "https://i.ibb.co/MCTVfg6/73904-103-860537078243-1-27862295039432.jpg",
  "https://i.ibb.co/4ZTPVCW/73905-103-862639154582-1-2800672499552.jpg",
  "https://i.ibb.co/JjrBVCW/7406-103-669441289048-1-3171534766238.jpg",
  "https://i.ibb.co/VTzZk6Z/74131-103-747918934354-1-33315171870363.jpg",
  "https://i.ibb.co/x6b9RbC/74631-103-926498918246-1-33709821522436.jpg",
  "https://i.ibb.co/z53NLNJ/75025-103-681628526948-1-31903764865988.jpg",
  "https://i.ibb.co/j3P1Qwz/75133-103-695186401822-1-33304459712839.jpg",
  "https://i.ibb.co/BwvwssY/75241-103-710117804319-1-33997399930022.jpg",
  "https://i.ibb.co/9nvYCBT/75340-103-988949636071-1-38953646826417.jpg",
  "https://i.ibb.co/1ZZvZwQ/75805-103-907544710993-1-33469996128294.jpg",
  "https://i.ibb.co/cN4vzXh/75898-103-685976246551-1-38189099506003.jpg",
  "https://i.ibb.co/LtKDbrP/75929-103-685971808177-1-38131812699372.jpg",
  "https://i.ibb.co/yqhjXXN/76144-103-634420662588-1-30148136446281.jpg",
  "https://i.ibb.co/ThpkZ4x/76333-103-957786451254-1-34401085057768.jpg",
  "https://i.ibb.co/ZW1VLKH/76465-103-665624348806-1-31387089310172.jpg",
  "https://i.ibb.co/3WqQKQB/76585-103-88354715875-1-39651818121197.jpg",
  "https://i.ibb.co/sV7VSj7/7692-103-669062468217-1-32824123308885.jpg",
  "https://i.ibb.co/yRCHJzL/77455-103-817682079993-1-31898210974169.jpg",
  "https://i.ibb.co/fXzztm3/77489-103-844969097038-1-36370806417801.jpg",
  "https://i.ibb.co/Rz192T4/77505-103-833051514206-1-27617934803258.jpg",
  "https://i.ibb.co/MD9RbYS/77879-103-749821315875-1-38049729169949.jpg",
  "https://i.ibb.co/PhnRvXL/77888-103-758518176772-1-35918047699796.jpg",
  "https://i.ibb.co/fFJ8VrF/77953-103-887368818178-1-31412840642448.jpg",
  "https://i.ibb.co/F08P6Mv/78276-103-852605241772-1-35997403619545.jpg",
  "https://i.ibb.co/fD7wpdS/78307-103-81949935802-1-32053263325548.jpg",
  "https://i.ibb.co/273F8Bd/7950-103-843811762101-1-36183061461133.jpg",
  "https://i.ibb.co/ss6JJvQ/79638-103-783245766796-1-33585217356167.jpg",
  "https://i.ibb.co/D4S5ypK/7972-103-751605355449-1-36065359145734.jpg",
  "https://i.ibb.co/xMXMKpp/80351-103-977023888041-1-32718038610053.jpg",
  "https://i.ibb.co/jHp7473/80370-103-630509863557-1-3234478694026.jpg",
  "https://i.ibb.co/gyx7gBm/80422-103-835466437471-1-28811551352482.jpg",
  "https://i.ibb.co/vm2h1dm/80749-103-847787102808-1-29811371239034.jpg",
  "https://i.ibb.co/Sf4jpf9/80758-103-885288978265-1-29515126067572.jpg",
  "https://i.ibb.co/pzWbgx5/81194-103-764170377141-1-36245565819062.jpg",
  "https://i.ibb.co/8YDdMZL/81242-103-894209410639-1-33538204906062.jpg",
  "https://i.ibb.co/hHNYzbZ/81407-103-844147392631-1-38282626823057.jpg",
  "https://i.ibb.co/2ssXMKq/81724-103-71573844218-1-33677552671232.jpg",
  "https://i.ibb.co/zV4yw6L/82424-103-859554561364-1-27797637185327.jpg",
  "https://i.ibb.co/b63gF9f/82461-103-854805107519-1-28079881636693.jpg",
  "https://i.ibb.co/WzStFXj/82948-103-76348834678-1-4268677400173.jpg",
  "https://i.ibb.co/PZjN1RY/83188-103-846673199718-1-30874013625562.jpg",
  "https://i.ibb.co/yRJpPHz/83345-103-749760119785-1-3999070326035.jpg",
  "https://i.ibb.co/RHDp3GH/83390-103-753228080885-1-32454447733207.jpg",
  "https://i.ibb.co/QKrW8Pw/8347-103-785472983693-1-32653671892818.jpg",
  "https://i.ibb.co/3pX11bc/83583-103-726690925283-1-37395451776809.jpg",
  "https://i.ibb.co/DwnXYjT/84789-103-76617658973-1-41632770085604.jpg",
  "https://i.ibb.co/2Sc2ZCw/84960-103-90556542554-1-32350198644348.jpg",
  "https://i.ibb.co/xSnwYTV/85245-103-830519298209-1-2500518024937.jpg",
  "https://i.ibb.co/bL8RHnm/85329-103-679801435675-1-31937389918752.jpg",
  "https://i.ibb.co/TvyTvS7/85566-103-754219451508-1-34335701400608.jpg",
  "https://i.ibb.co/Kxf8c0d/85965-103-663347046147-1-31038599341276.jpg",
  "https://i.ibb.co/tKY4Psg/860-103-83393519185-1-43864903601324.jpg",
  "https://i.ibb.co/b3Bm9Sx/86211-103-837057991344-1-42692129871818.jpg",
  "https://i.ibb.co/19rkXmK/86527-103-894730383521-1-33166941757552.jpg",
  "https://i.ibb.co/KKzf76M/8661-103-88634639692-1-32031612093948.jpg",
  "https://i.ibb.co/BLLvRQH/86667-103-78849144419-1-32977754716253.jpg",
  "https://i.ibb.co/SJzHs7h/87010-103-78094554789-1-42630532965151.jpg",
  "https://i.ibb.co/LZQJ6yZ/8728-103-781976988921-1-29709896331752.jpg",
  "https://i.ibb.co/tZpbptw/87424-103-964494891318-1-31758749297053.jpg",
  "https://i.ibb.co/6Z8rmj4/88028-103-868272865807-1-2802352073367.jpg",
  "https://i.ibb.co/SdV21Td/880-103-865737665263-1-28027816638911.jpg",
  "https://i.ibb.co/k6XpSp8/88314-103-935449625105-1-33946558201851.jpg",
  "https://i.ibb.co/rG257fJ/88385-103-827762319862-1-4505426580403.jpg",
  "https://i.ibb.co/PZYMGnZ/88430-103-831624466358-1-34060517005179.jpg",
  "https://i.ibb.co/Y8sFwgJ/88565-103-641591807551-1-33203990626243.jpg",
  "https://i.ibb.co/5Y6B6Rh/89237-103-863677662995-1-30890469284615.jpg",
  "https://i.ibb.co/mJyGfqG/89480-103-7030710358-1-42805241271215.jpg",
  "https://i.ibb.co/6m4pRy2/89632-103-744629479447-1-3862896108499.jpg",
  "https://i.ibb.co/PgphZf6/90896-103-86638263625-1-27802205387043.jpg",
  "https://i.ibb.co/VmTp1Zc/91170-103-789810740871-1-33348215362229.jpg",
  "https://i.ibb.co/Wgjbjkc/91325-103-841642940147-1-27210138563604.jpg",
  "https://i.ibb.co/pfH7Yn9/92033-103-807397110054-1-32381732061923.jpg",
  "https://i.ibb.co/0nhJKtp/92168-103-949971693175-1-35155668303077.jpg",
  "https://i.ibb.co/zh1gc7f/9725-103-781113532876-1-33654419592962.jpg",
  "https://i.ibb.co/QFfr9hP/9920-103-899920849973-1-40578834480838.jpg",
  "https://i.ibb.co/x6fxczt/1016-103-867042626042-1-34375582175661.jpg",
  "https://i.ibb.co/27Sk0Sw/10679-103-963577003334-1-34800839954126.jpg",
  "https://i.ibb.co/Ch3VP3x/11310-103-947886634878-1-37425283849799.jpg",
  "https://i.ibb.co/YZzVP5Y/11384-103-786318247136-1-32381296198624.jpg",
  "https://i.ibb.co/zFwR9jM/11479-103-838116203323-1-30604477828612.jpg",
  "https://i.ibb.co/BCb4H3p/11541-103-765907638907-1-31805191951375.jpg",
  "https://i.ibb.co/WkV21xC/11836-103-963921194135-1-3791496423471.jpg",
  "https://i.ibb.co/CBXqfDr/11862-103-780103209485-1-2973562346962.jpg",
  "https://i.ibb.co/X2BH6k1/12823-103-870738977805-1-27880909633747.jpg",
  "https://i.ibb.co/Th45MF2/12824-103-868482144524-1-2766119938983.jpg",
  "https://i.ibb.co/RD3G9GV/12853-103-870219607304-1-27754346509948.jpg",
  "https://i.ibb.co/YNkrcKd/12908-103-984958036711-1-34909694437496.jpg",
  "https://i.ibb.co/YLPpxMN/12914-103-831976416041-1-37725385176858.jpg",
  "https://i.ibb.co/0fmSQD4/13035-103-781310311798-1-33434906250072.jpg",
  "https://i.ibb.co/QrgdSdF/13087-103-831345297958-1-32599211322672.jpg",
  "https://i.ibb.co/5RW7xBG/13503-103-813850601391-1-40219730800946.jpg",
  "https://i.ibb.co/rkDFRgq/14009-103-764418026525-1-41046446175628.jpg",
  "https://i.ibb.co/JcDLGfD/14468-103-850013912714-1-27996248825672.jpg",
  "https://i.ibb.co/DR8KxV7/14936-103-9151420749-1-30268436022981.jpg",
  "https://i.ibb.co/nMYJV6x/15036-103-859790592143-1-36273309948045.jpg",
  "https://i.ibb.co/WV7wfjN/15159-103-872156783449-1-38360484776865.jpg",
  "https://i.ibb.co/N7j2P9R/15273-103-976060947212-1-33863182016852.jpg",
  "https://i.ibb.co/pwrz2hP/15790-103-811694763893-1-40292763434744.jpg",
  "https://i.ibb.co/MNfSpBJ/15913-103-854170520321-1-39754592797459.jpg",
  "https://i.ibb.co/ftnTRDw/16085-103-911015333404-1-33825637885029.jpg",
  "https://i.ibb.co/gv8FDnj/16914-103-806599080893-1-41256696674301.jpg",
  "https://i.ibb.co/fxyR599/17441-103-750456919946-1-34076163394892.jpg",
  "https://i.ibb.co/r2Y069R/18074-103-784039863567-1-33092967862444.jpg",
  "https://i.ibb.co/JBX4h8B/18075-103-786270088421-1-32960525544992.jpg",
  "https://i.ibb.co/k5PVXY0/18078-103-78218971939-1-33279445082369.jpg",
  "https://i.ibb.co/rk7nnCr/18443-103-83489832904-1-2723161276815.jpg",
  "https://i.ibb.co/pyNPyNr/1937-103-643839263474-1-32582887700349.jpg",
  "https://i.ibb.co/3W4v5gD/19393-103-784721401755-1-29481006547306.jpg",
  "https://i.ibb.co/mNPCFZV/19416-103-796522415058-1-30179730064395.jpg",
  "https://i.ibb.co/syFTvJN/19522-103-829995562031-1-29050999887383.jpg",
  "https://i.ibb.co/C0zQSXK/19568-103-708091602054-1-36152286372906.jpg",
  "https://i.ibb.co/vwJsQ3X/19642-103-773176772929-1-29796981926975.jpg",
  "https://i.ibb.co/GMnT0Jj/19910-103-825037904733-1-26948462970525.jpg",
  "https://i.ibb.co/mRdqmYj/20102-103-85921219245-1-3283815164392.jpg",
  "https://i.ibb.co/SNbWGMZ/20396-103-768255704294-1-33213010431206.jpg",
  "https://i.ibb.co/Ydqnzr3/21027-103-918167466396-1-32432608555337.jpg",
  "https://i.ibb.co/sCjV8W7/21101-103-783855446325-1-29598340148595.jpg",
  "https://i.ibb.co/w7Gm6Vx/21326-103-828833038921-1-33004078857192.jpg",
  "https://i.ibb.co/6H1YRZw/22732-103-964476350106-1-33146452742969.jpg",
  "https://i.ibb.co/XL7zY5n/23576-103-743785153559-1-364536770615.jpg",
  "https://i.ibb.co/1mcg8PT/23710-103-629776123555-1-30202455242693.jpg",
  "https://i.ibb.co/k14hZm9/23883-103-839572929906-1-44012159151138.jpg",
  "https://i.ibb.co/3hHnGBJ/24374-103-926466913876-1-36344152395204.jpg",
  "https://i.ibb.co/DWQMnDm/24567-103-750551709211-1-31486103565796.jpg",
  "https://i.ibb.co/7CNMk2J/24615-103-741138737094-1-32874694924275.jpg",
  "https://i.ibb.co/P98k6nW/24993-103-810667496275-1-44474820144592.jpg",
  "https://i.ibb.co/68Gb9wT/25324-103-806390830823-1-28042264036615.jpg",
  "https://i.ibb.co/SrkGR0D/25494-103-774118720495-1-29866925747646.jpg",
  "https://i.ibb.co/LJrVMtX/25657-103-784933205363-1-29374470430746.jpg",
  "https://i.ibb.co/1JYfDm9/25907-103-774136710719-1-39355356552606.jpg",
  "https://i.ibb.co/GvMRMFT/26325-103-87809248661-1-3330706627982.jpg",
  "https://i.ibb.co/nbMXdbp/26594-103-844188305325-1-38949048181061.jpg",
  "https://i.ibb.co/ZY6V6vF/26825-103-967465600306-1-31856522657686.jpg",
  "https://i.ibb.co/k2v90B0/26893-103-817730229811-1-31003741186844.jpg",
  "https://i.ibb.co/6vV9Hs1/2690-103-941747182276-1-37984518202163.jpg",
  "https://i.ibb.co/tP7CfKd/26979-103-901440501174-1-40761908886188.jpg",
  "https://i.ibb.co/vJZW2Vx/27102-103-861723230056-1-28022013041829.jpg",
  "https://i.ibb.co/Tqsk5SJ/27128-103-86060734437-1-27677842632252.jpg",
  "https://i.ibb.co/Lkv4FZN/27182-103-872622132883-1-31787771700508.jpg",
  "https://i.ibb.co/6FhQDTS/28245-103-768365305037-1-34795908746085.jpg",
  "https://i.ibb.co/ctDr1yn/28316-103-933270113546-1-34133817609308.jpg",
  "https://i.ibb.co/jWSxQLW/28335-103-770713477119-1-29420078181047.jpg",
  "https://i.ibb.co/sW2jQt5/28340-103-774758731354-1-29249665173242.jpg",
  "https://i.ibb.co/x57k9j4/28342-103-778285610265-1-29299305409501.jpg",
  "https://i.ibb.co/TggvMz3/28593-103-797191233207-1-4369678859146.jpg",
  "https://i.ibb.co/qNBXLch/28701-103-78189878117-1-43407687668778.jpg",
  "https://i.ibb.co/vq3b68Q/30243-103-816166631205-1-26787994581908.jpg",
  "https://i.ibb.co/nrNbz3S/30297-103-773970818597-1-3028861597912.jpg",
  "https://i.ibb.co/QvywKQF/30303-103-774473228961-1-3011843802597.jpg",
  "https://i.ibb.co/nzbvWVS/30657-103-828389286274-1-27325718743392.jpg",
  "https://i.ibb.co/0mQPJb5/31594-103-983823215103-1-34806791561448.jpg",
  "https://i.ibb.co/vd40L5N/3220-104-029947750914-1-35900964721105.jpg",
  "https://i.ibb.co/8XW42cq/32213-103-835963422473-1-41369105288394.jpg",
  "https://i.ibb.co/X3FbWbL/32416-103-750715539467-1-33024299697896.jpg",
  "https://i.ibb.co/26y27f8/32425-104-002370754797-1-31303221449913.jpg",
  "https://i.ibb.co/mbbKPCz/32925-103-76822015373-1-33279029246423.jpg",
  "https://i.ibb.co/phQ3Mf5/33335-103-638805650407-1-27765698210496.jpg",
  "https://i.ibb.co/yfQyyV4/33354-103-614074004433-1-25547162757048.jpg",
  "https://i.ibb.co/Q82sFF5/34080-103-8037583632-1-28140867234054.jpg",
  "https://i.ibb.co/Pw9fDZr/34295-103-682008612005-1-32297579298217.jpg",
  "https://i.ibb.co/Rjcw7vm/34542-103-661332022855-1-31158776340406.jpg",
  "https://i.ibb.co/Hhs0x8g/3468-103-844637627027-1-43112319197058.jpg",
  "https://i.ibb.co/5YdRFVM/34886-103-788098675328-1-32690553951894.jpg",
  "https://i.ibb.co/cJrCTF9/35581-103-823867093822-1-31694691183501.jpg",
  "https://i.ibb.co/5swtwNC/36625-103-786061074286-1-33476911239826.jpg",
  "https://i.ibb.co/sgpqkDr/36642-103-793266811766-1-33224421121747.jpg",
  "https://i.ibb.co/Q6ZCKJd/36645-103-850499829594-1-27960800324085.jpg",
  "https://i.ibb.co/hVz2Sc6/3746-103-795302918801-1-29088376992161.jpg",
  "https://i.ibb.co/mRy78T4/37694-103-839741429201-1-31641517667848.jpg",
  "https://i.ibb.co/VC5fxvg/37876-103-932082321635-1-38155949799972.jpg",
  "https://i.ibb.co/1TDcf51/37949-103-93864644676-1-3556469240967.jpg",
  "https://i.ibb.co/6466DW3/38528-103-741743839751-1-41894718430859.jpg",
  "https://i.ibb.co/PFPFrdZ/38531-103-815473770103-1-45458570054508.jpg",
  "https://i.ibb.co/BZNrhd0/38772-103-976468708763-1-38925498518695.jpg",
  "https://i.ibb.co/2nLkT6M/38983-103-858337127454-1-31662210026903.jpg",
  "https://i.ibb.co/1fXkDPx/39134-103-837020678868-1-31454679559635.jpg",
  "https://i.ibb.co/ZYxLrk2/39354-103-92124214229-1-37838174692528.jpg",
  "https://i.ibb.co/Cv3g30x/39493-103-850064179721-1-29599706728923.jpg",
  "https://i.ibb.co/FgB56HC/39541-103-856597467957-1-27937631840172.jpg",
  "https://i.ibb.co/zNtkMvF/39545-103-852318247704-1-28209725383972.jpg",
  "https://i.ibb.co/PQ4gz26/39553-103-852908805393-1-29165479296711.jpg",
  "https://i.ibb.co/vsVL9XK/39785-103-852515408515-1-27828426684471.jpg",
  "https://i.ibb.co/cX6TWfY/39898-103-933151705532-1-35384208090841.jpg",
  "https://i.ibb.co/0qtzQpG/40045-103-737586172561-1-37774467837256.jpg",
  "https://i.ibb.co/25TMtDS/40288-103-692914081702-1-38248889135452.jpg",
  "https://i.ibb.co/xFCY9zx/40482-103-742493708283-1-4031036273537.jpg",
  "https://i.ibb.co/cCkLR0b/40549-103-711323744554-1-43502943879627.jpg",
  "https://i.ibb.co/wWsjRy8/40756-103-840315173379-1-27855696472811.jpg",
  "https://i.ibb.co/7rXCX8J/41461-103-847242428609-1-28202131420821.jpg",
  "https://i.ibb.co/0V55NDF/41602-103-698033390189-1-37268889967291.jpg",
  "https://i.ibb.co/CBxHvz9/41819-103-701754210105-1-34943097811067.jpg",
  "https://i.ibb.co/ctH0d7Y/41963-103-834103488923-1-23991572943163.jpg",
  "https://i.ibb.co/WDTvXzz/42020-103-751896041085-1-30464377122995.jpg",
  "https://i.ibb.co/pz0fSzG/42514-103-783651832345-1-3481442298516.jpg",
  "https://i.ibb.co/LC9Fp9G/42730-103-642142316702-1-32077066233428.jpg",
  "https://i.ibb.co/QfPqhBS/43134-103-802434484695-1-2911942531454.jpg",
  "https://i.ibb.co/fpgmPYm/43269-103-626600025382-1-30758535763003.jpg",
  "https://i.ibb.co/hcW8L8Q/43409-103-826545378656-1-30905669105997.jpg",
  "https://i.ibb.co/25yD3NT/43862-103-877700690936-1-36439326598824.jpg",
  "https://i.ibb.co/8j7Drcr/43945-103-848959619874-1-27704971485841.jpg",
  "https://i.ibb.co/4K9RG3m/43960-103-847348984863-1-27467840307761.jpg",
  "https://i.ibb.co/6P3mCFj/43992-103-955082415005-1-32503804265629.jpg",
  "https://i.ibb.co/z5Tmsx5/44128-103-744277168306-1-41553996082867.jpg",
  "https://i.ibb.co/JFFNYzs/44218-103-773755055815-1-32387829801015.jpg",
  "https://i.ibb.co/6r3s7fs/44241-103-745281496346-1-39861773650187.jpg",
  "https://i.ibb.co/dLJFvBg/44537-103-791101807544-1-32824067237828.jpg",
  "https://i.ibb.co/BcTyj3d/44695-103-840498478353-1-2928392758763.jpg",
  "https://i.ibb.co/tZFcrrW/45300-103-881552155472-1-37434605810548.jpg",
  "https://i.ibb.co/mzbkYqS/45459-103-874504946737-1-32596926541085.jpg",
  "https://i.ibb.co/tJc9tWc/45543-103-876499238169-1-38708485812151.jpg",
  "https://i.ibb.co/gTYt9Sy/45619-103-783766045962-1-29190380259357.jpg",
  "https://i.ibb.co/Dz1tNJF/46008-103-881284171749-1-32393322140761.jpg",
  "https://i.ibb.co/dQNdWy6/46146-103-71951191143-1-32468171887778.jpg",
  "https://i.ibb.co/zSRtgM2/46352-103-851460346779-1-28112702236533.jpg",
  "https://i.ibb.co/yRmM6dh/4662-103-704191561448-1-3141797086464.jpg",
  "https://i.ibb.co/Rj47LG6/46736-103-890105179983-1-33024682812202.jpg",
  "https://i.ibb.co/RbFtzKb/4677-103-724022205706-1-32285615262467.jpg",
  "https://i.ibb.co/R78bqfH/47043-103-92195777581-1-32159488893919.jpg",
  "https://i.ibb.co/8jYcVGz/47206-103-931318568744-1-3138254698265.jpg",
  "https://i.ibb.co/CbD1CKG/4787-103-834190843985-1-30608477046082.jpg",
  "https://i.ibb.co/9c7JL5H/48076-103-883946810397-1-36643695765585.jpg",
  "https://i.ibb.co/D9js01D/48200-103-87665510933-1-34489327942751.jpg",
  "https://i.ibb.co/BPwDL0y/48224-103-793033041102-1-33110102141501.jpg",
  "https://i.ibb.co/rGzvSf0/48253-103-792310595148-1-32947469965132.jpg",
  "https://i.ibb.co/9yq1WKF/48266-103-888541953452-1-3045885809639.jpg",
  "https://i.ibb.co/2sHRgQ1/48737-103-676455094039-1-31528889802542.jpg",
  "https://i.ibb.co/3FKPzYR/48922-103-871640708775-1-39853511641579.jpg",
  "https://i.ibb.co/jkNX2CC/4909-103-820214631171-1-44123649347491.jpg",
  "https://i.ibb.co/ss3H20d/49100-103-741289870256-1-32330173524077.jpg",
  "https://i.ibb.co/0XRdsfj/49125-103-870328848494-1-38394700396652.jpg",
  "https://i.ibb.co/5W7MbJT/4930-103-848161253442-1-34277359916654.jpg",
  "https://i.ibb.co/SdkCJZZ/49518-103-915118876974-1-33908069961984.jpg",
  "https://i.ibb.co/fdyWNhK/50446-103-935830807344-1-37898738345038.jpg",
  "https://i.ibb.co/dB0nyXW/50563-103-933568788253-1-34997084514063.jpg",
  "https://i.ibb.co/824KyJg/51444-103-774729292618-1-29968564829371.jpg",
  "https://i.ibb.co/8skVcw4/53007-103-653773761285-1-32863648044765.jpg",
  "https://i.ibb.co/Mk5sDcL/53030-103-747514600402-1-35684164619003.jpg",
  "https://i.ibb.co/pPW2N1v/53578-103-775745805244-1-29380397677365.jpg",
  "https://i.ibb.co/5kTKXY3/53687-103-846152570838-1-42719526395898.jpg",
  "https://i.ibb.co/f8SFqG9/53886-103-780511860228-1-29130334080392.jpg",
  "https://i.ibb.co/5WRwtSx/54200-103-788853082655-1-33234223570945.jpg",
  "https://i.ibb.co/tDc2MY6/54767-103-909292025135-1-41821999738173.jpg",
  "https://i.ibb.co/TRdDJx9/55042-103-777645663437-1-29750814002905.jpg",
  "https://i.ibb.co/dMjjbCy/55206-103-772104090972-1-34192272726587.jpg",
  "https://i.ibb.co/BzZzZCL/55255-103-776676499993-1-29837433532473.jpg",
  "https://i.ibb.co/NnZD0Yt/55485-103-773236025712-1-29299099674723.jpg",
  "https://i.ibb.co/w6RQWZX/55491-103-771729778968-1-29620360828044.jpg",
  "https://i.ibb.co/SdRZgfn/55733-103-783233287876-1-43028257700327.jpg",
  "https://i.ibb.co/NLT8cHP/55993-103-81315977194-1-46414392420309.jpg",
  "https://i.ibb.co/rbSVtKs/56108-103-838041408975-1-36802111402887.jpg",
  "https://i.ibb.co/2jXSkjM/56111-103-840667753723-1-3679624856612.jpg",
  "https://i.ibb.co/zSmNctN/56613-103-793013105878-1-44469580144812.jpg",
  "https://i.ibb.co/fGTRVrC/56675-103-77381150978-1-43849143332502.jpg",
  "https://i.ibb.co/TT7836g/56824-103-76860550049-1-38824348249427.jpg",
  "https://i.ibb.co/mH5fbK6/57059-103-788685023304-1-3281545672643.jpg",
  "https://i.ibb.co/Z2zW63h/57081-103-787868633354-1-33066541592582.jpg",
  "https://i.ibb.co/Tms0FLT/57127-103-782463522638-1-33422172385243.jpg",
  "https://i.ibb.co/3RKK96g/57313-103-77391086315-1-37223424329352.jpg",
  "https://i.ibb.co/bQLGtR7/5793-103-886908504984-1-3401206964957.jpg",
  "https://i.ibb.co/grYJ2mp/58036-103-837579961869-1-44311108974084.jpg",
  "https://i.ibb.co/Hd9H13T/58160-103-859767332324-1-33683520498833.jpg",
  "https://i.ibb.co/1bRVqJj/58830-103-837838439514-1-38835464136012.jpg",
  "https://i.ibb.co/xsFbhbm/59046-103-854395743911-1-34858290408207.jpg",
  "https://i.ibb.co/GH9c6nS/59371-103-841372826095-1-35304393370036.jpg",
  "https://i.ibb.co/LQJYLmP/59819-103-886629440835-1-36272351903371.jpg",
  "https://i.ibb.co/SKjqMkP/60719-103-896402032007-1-33265041262302.jpg",
  "https://i.ibb.co/Zm2WPmw/60748-103-89597282897-1-33479352833723.jpg",
  "https://i.ibb.co/23Kz9Wr/61711-103-834596530449-1-38283392556474.jpg",
  "https://i.ibb.co/CtXT09b/62026-103-877263120793-1-29487806758038.jpg",
  "https://i.ibb.co/BcRGbpR/62524-103-737300096247-1-35729284657216.jpg",
  "https://i.ibb.co/pnPvCzC/62559-103-886188696156-1-2950276012273.jpg",
  "https://i.ibb.co/8P98d58/62855-103-811395496788-1-41495301113586.jpg",
  "https://i.ibb.co/R70PvTY/63075-103-854595785758-1-28193703185646.jpg",
  "https://i.ibb.co/W0Nk0Mh/63199-103-718840353297-1-35603460296448.jpg",
  "https://i.ibb.co/kJDqx1z/63941-103-732193271054-1-34556674146187.jpg",
  "https://i.ibb.co/b2sgjBD/63986-103-633814011361-1-3064775876554.jpg",
  "https://i.ibb.co/16CxsN9/63999-103-785078224515-1-32536995191649.jpg",
  "https://i.ibb.co/Bjm8X7w/64401-103-614288525467-1-26428461960497.jpg",
  "https://i.ibb.co/bzvPGw3/64436-103-616424078612-1-27004348990424.jpg",
  "https://i.ibb.co/sFNx7CV/65183-103-689548218272-1-35239001394135.jpg",
  "https://i.ibb.co/D9pJH2r/66006-103-971964082558-1-3272683812222.jpg",
  "https://i.ibb.co/9r30sSz/66263-103-842075348221-1-36108637263404.jpg",
  "https://i.ibb.co/vJQPdpd/66647-103-758456154137-1-31117959966693.jpg",
  "https://i.ibb.co/gZy9Zbp/6687-103-988103819527-1-36032646871706.jpg",
  "https://i.ibb.co/Rggbctd/67267-103-679367372258-1-30787679856932.jpg",
  "https://i.ibb.co/bdk8yqP/67346-103-842834535224-1-299476941993.jpg",
  "https://i.ibb.co/tcphYsd/67586-103-863747652346-1-34642706976878.jpg",
  "https://i.ibb.co/Z63gxmn/67795-103-789732278165-1-31015184300751.jpg",
  "https://i.ibb.co/fnCzZ95/68921-103-766467526285-1-32963049775239.jpg",
  "https://i.ibb.co/R30bKbz/6941-103-929697717354-1-40427794930638.jpg",
  ];

const imageChoicesMap = {};

// Generate a random, non-repeating subset of four image urls.
function getRandomTwoImages(questionName) {
  let images = [...imageUrls]; // Copy the array.
  let result = [];
  for (let i = 0; i < 2; i++) {
    
    const randomIndex = Math.floor(Math.random() * images.length);
    result.push({
      value: images[randomIndex], // Using the image URL as the value.
      imageLink: images[randomIndex]
    });
    images.splice(randomIndex, 1); // Remove the selected image from the array to avoid repetition.
  }
  imageChoicesMap[questionName] = result; // Store the two images for the given question name.
  return result;
}


const surveyJson = {
  "title": "Urban streetscape survey",
  "description": "Dear participants,This survey focuses on people's visual perception of street view scenes. Please answer the questions based on your feelings about the scenes in the images. There are 25 questions in this questionnaire. Thank you for your participation!",
  "logo": "https://api.surveyjs.io/private/Surveys/files?name=8fb3943d-2606-4486-88ad-a41ad27f4570",
  "logoPosition": "right",
  "pages": [
   {
    "name": "page1",
    "elements": [
     {
      "type": "radiogroup",
      "name": "question1",
      "title": "How old are you?",
      "isRequired": true,
      "choices": [
       {
        "value": "<18",
        "text": "Under 18"
       },
       "19-24",
       "25-34",
       "35-44",
       "45-54",
       "55-64",
       {
        "value": ">65",
        "text": "65 and above"
       }
      ],
      "showNoneItem": true,
      "noneText": "Unwilling to answer"
     },
     {
      "type": "radiogroup",
      "name": "question2",
      "title": "What is your gender?",
      "isRequired": true,
      "choices": [
       "Female",
       "Male"
      ],
      "showOtherItem": true,
      "showNoneItem": true,
      "noneText": "Unwilling to answer"
     },
     {
      "type": "radiogroup",
      "name": "question3",
      "title": "What is your relationship with Singapore?",
      "isRequired": true,
      "choices": [
       {
        "value": "CR",
        "text": "Citizen or Resident"
       },
       {
        "value": "LV",
        "text": "Long-term Visitor (student, foreign worker, family member, etc)"
       },
       {
        "value": "SV",
        "text": "Short-term Visitor (traveler, etc)"
       }
      ],
      "showOtherItem": true,
      "showNoneItem": true,
      "noneText": "Unwilling to answer"
     },
     {
      "type": "radiogroup",
      "name": "question4",
      "title": "Your recent frequency of walking on streets (shopping, exercising, commuting, traveling, etc.) in a week is roughly",
      "isRequired": true,
      "choices": [
       {
        "value": "Item 1",
        "text": "Hardly travel by walking"
       },
       {
        "value": "Item 2",
        "text": "Once a week"
       },
       {
        "value": "Item 3",
        "text": "Once every two or three days"
       },
       {
        "value": "Item 4",
        "text": "Once a day"
       },
       {
        "value": "Item 5",
        "text": "Multiple times a day"
       }
      ],
      "showNoneItem": true,
      "noneText": "Unwilling to answer"
     }
    ],
    "title": "Basic Information",
    "description": "In this section, please answer some basic questions about yourself (age, gender, residential status, and walking behavior)."
   },
   {
    "name": "page2",
    "elements": [
     {
      "type": "imagepicker",
      "name": "question5",
      "title": "Which street view image do you believe exhibits the highest outdoor temperature?",
      "choices": getRandomTwoImages("question5")
     },
     {
      "type": "imagepicker",
      "name": "question6",
      "title": "Which street view image do you perceive as having the most comfortable outdoor temperature for you?",
      "choices": getRandomTwoImages("question6")
     },
     {
      "type": "imagepicker",
      "name": "question7",
      "title": "Which street view image do you think showcases the highest sunlight intensity?",
      "choices": getRandomTwoImages("question7")
     },
     {
      "type": "imagepicker",
      "name": "question8",
      "title": "Which street view image do you think showcases the highest traffic volume?",
      "choices": getRandomTwoImages("question8")
     },
     {
      "type": "imagepicker",
      "name": "question9",
      "title": "Which street view image do you think showcases the highest pedestrian activity?",
      "choices": getRandomTwoImages("question9")
     },
     {
      "type": "imagepicker",
      "name": "question10",
      "title": "Which street view image do you think showcases the highest abundance of greenery?",
      "choices": getRandomTwoImages("question10")
     },
     {
      "type": "imagepicker",
      "name": "question11",
      "title": "Which street view image do you think showcases the highest extent of shaded areas?",
      "choices": getRandomTwoImages("question11")
     }
    ],
    "title": "Part 1: Urban Heat Perception & Heat Source"
   },
   {
    "name": "page3",
    "elements": [
     {
      "type": "imagepicker",
      "name": "question12",
      "title": "Which street view image stands out to you as the most impressive place?",
      "choices": getRandomTwoImages("question12")
     },
     {
      "type": "imagepicker",
      "name": "question13",
      "title": "Which street view image stands out to you as the most enclosed space?",
      "choices": getRandomTwoImages("question13")
     },
     {
      "type": "imagepicker",
      "name": "question14",
      "title": "Which street view image stands out to you as the most accommodating for human scale?",
      "choices": getRandomTwoImages("question14")
     },
     {
      "type": "imagepicker",
      "name": "question15",
      "title": "Which street view image stands out to you as the most transparent space?",
      "choices": getRandomTwoImages("question15")
     },
     {
      "type": "imagepicker",
      "name": "question16",
      "title": "Which street view image stands out to you as the most complex environment?",
      "choices": getRandomTwoImages("question16")
     }
    ],
    "title": "Part 2: Impression on Streetscape"
   },
   {
    "name": "page4",
    "elements": [
     {
      "type": "imagepicker",
      "name": "question17",
      "title": "Which street view image do you feel evokes the most vibrant atmosphere?",
      "choices": getRandomTwoImages("question17")
     },
     {
      "type": "imagepicker",
      "name": "question18",
      "title": "Which street view image do you feel evokes the most beautiful atmosphere?",
      "choices": getRandomTwoImages("question18")
     },
     {
      "type": "imagepicker",
      "name": "question19",
      "title": "Which street view image do you feel evokes the most affluent atmosphere?",
      "choices": getRandomTwoImages("question19")
     },
     {
      "type": "imagepicker",
      "name": "question20",
      "title": "Which street view image do you feel evokes the most safe atmosphere?",
      "choices": getRandomTwoImages("question20")
     },
     {
      "type": "imagepicker",
      "name": "question21",
      "title": "Which street view image do you feel evokes the most interesting atmosphere?",
      "choices": getRandomTwoImages("question21")
     },
     {
      "type": "imagepicker",
      "name": "question22",
      "title": "Which street view image do you feel evokes the most monotonous atmosphere?",
      "choices": getRandomTwoImages("question22")
     },
     {
      "type": "imagepicker",
      "name": "question23",
      "title": "Which street view image do you feel evokes the most chaotic atmosphere?",
      "choices": getRandomTwoImages("question23")
     },
     {
      "type": "imagepicker",
      "name": "question24",
      "title": "Which street view image do you feel evokes the most depressing atmosphere?",
      "choices": getRandomTwoImages("question24")
     },
     {
      "type": "imagepicker",
      "name": "question25",
      "title": "Which street view image do you feel evokes the most annoying atmosphere?",
      "choices": getRandomTwoImages("question25")
     }
    ],
    "title": "Part 3: Emotion on Streetscape"
   }
  ]
 }

export default function App() {

  const model = new Model(surveyJson);
  model.applyTheme(themeJson)

  async function saveSurveyResult(data) {
    // Create a new SurveyResult entry using DataStore.
    await DataStore.save(
      new SurveyResult(data) 
    );
    console.log("Survey result saved:", data);
  }

  model.onComplete.add((survey, options) => {
    const data = {};
    for (let i = 1; i <= 25; i++) {
      const questionName = "question" + i;
      if (i >= 5) { 
        const selectedValue = survey.data[questionName];
        if (selectedValue) { 
          // Use the imageChoicesMap to get the unselected image.
          const unselectedImage = imageChoicesMap[questionName].find(choice => choice.value !== selectedValue).value;
          data[questionName] = selectedValue + ',' + unselectedImage;
        } else { 
          data[questionName] = "None";
        }
      } else {
        data[questionName] = survey.data[questionName] || "None"; 
      }
    }
    saveSurveyResult(data); 
  });
  
  return <Survey model={model} />;
}
