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
  'https://i.ibb.co/7GQjHYv/7-103-691401158166-1-33638822684768.jpg',
  'https://i.ibb.co/T2P0FK7/17-103-965982384617-1-33718484254059.jpg',
  'https://i.ibb.co/8c4X9rp/249-103-834942130443-1-44842362369704.jpg',
  'https://i.ibb.co/dm87t30/348-103-882669552433-1-34834058181907.jpg',
  'https://i.ibb.co/tMJJD5D/376-103-737989877242-1-32207769851196.jpg',
  'https://i.ibb.co/drDFKnb/410-103-830666219077-1-41649144503013.jpg',
  'https://i.ibb.co/vD2g6y7/641-103-841635208299-1-39150661603165.jpg',
  'https://i.ibb.co/x1MwQMG/761-103-722414526978-1-38350437995725.jpg',
  'https://i.ibb.co/tPfHVtT/799-103-635244406634-1-32671308660574.jpg',
  'https://i.ibb.co/cNhCNbT/1169-103-947519225051-1-35667191963618.jpg',
  'https://i.ibb.co/DDgdsHR/1669-103-844954259738-1-43858832493154.jpg',
  'https://i.ibb.co/p2d63qh/1791-103-83931346578-1-43423125373499.jpg',
  'https://i.ibb.co/1q2TL3j/1957-103-63244556433-1-32337975029413.jpg',
  'https://i.ibb.co/L5YXbYC/2338-103-811492304679-1-44314613509588.jpg',
  'https://i.ibb.co/ct8LRcK/3470-103-834123176515-1-41352274522579.jpg',
  'https://i.ibb.co/VL06PH0/3503-103-849310346992-1-27479938276955.jpg',
  'https://i.ibb.co/7SKF4fp/3651-103-750380937671-1-37459159447096.jpg',
  'https://i.ibb.co/CB7hqqy/3658-103-750097812835-1-37582762919653.jpg',
  'https://i.ibb.co/WH333WR/3713-103-838194851186-1-28611405866513.jpg',
  'https://i.ibb.co/8bBBVPp/3769-103-90513220357-1-41056576932427.jpg',
  'https://i.ibb.co/1n9k3M9/3954-103-774262951504-1-31369718719351.jpg',
  'https://i.ibb.co/pQz8Jn1/3967-103-822164720323-1-3045106513672.jpg',
  'https://i.ibb.co/5F8hN5g/4351-103-73613853048-1-33492756475646.jpg',
  'https://i.ibb.co/XCdQHky/4517-103-835458665363-1-34130878261702.jpg',
  'https://i.ibb.co/YddVTK7/4520-103-722825809719-1-32232085473513.jpg',
  'https://i.ibb.co/9HJvGPj/4755-103-832155889104-1-29421328672251.jpg',
  'https://i.ibb.co/ZxBs6GL/4919-103-880612861431-1-31684564916755.jpg',
  'https://i.ibb.co/rvr3Bnz/4973-103-875856549526-1-37726533469775.jpg',
  'https://i.ibb.co/y8nFb2z/5177-103-774456983334-1-43841889707753.jpg',
  'https://i.ibb.co/MngrjLj/5340-103-755906085903-1-34782697205514.jpg',
  'https://i.ibb.co/P9G0YZb/5579-103-826763574094-1-24827892929915.jpg',
  'https://i.ibb.co/3vt934w/5824-103-964046587949-1-34535387497435.jpg',
  'https://i.ibb.co/fHxnkX0/5890-103-923391521569-1-33170633586357.jpg',
  'https://i.ibb.co/2SWzfjH/6193-103-85051738261-1-3314377938912.jpg',
  'https://i.ibb.co/qdw9mzM/6522-103-917315471364-1-39507412825381.jpg',
  'https://i.ibb.co/DYHs4bc/6745-103-79581542161-1-27045146672818.jpg',
  'https://i.ibb.co/3sXN2Mp/6820-103-873063734264-1-34156745410943.jpg',
  'https://i.ibb.co/rbNrJ0d/6913-103-894905755457-1-35714423998725.jpg',
  'https://i.ibb.co/CVN09D8/6954-103-833452485332-1-36355024953854.jpg',
  'https://i.ibb.co/T8NBVVR/7264-103-825171299835-1-29077450229903.jpg',
  'https://i.ibb.co/10Zr69w/7322-103-839535655503-1-37557933665143.jpg',
  'https://i.ibb.co/J5cnmxn/7999-103-936429990576-1-36558853818052.jpg',
  'https://i.ibb.co/8zDNhxc/8181-103-922359940577-1-31428110192427.jpg',
  'https://i.ibb.co/CVMgmJ5/8197-103-87150695535-1-34579343688166.jpg',
  'https://i.ibb.co/3s7M6ND/8261-103-829828416714-1-37168684290203.jpg',
  'https://i.ibb.co/StTG20M/8285-103-850795283698-1-278699662077.jpg',
  'https://i.ibb.co/Wyyxqfp/8434-103-863206801838-1-36391318780607.jpg',
  'https://i.ibb.co/B4r5Ng7/8796-103-84625823446-1-28149057300624.jpg',
  'https://i.ibb.co/XxynBQH/8931-103-850735604781-1-2748879249223.jpg',
  'https://i.ibb.co/k5VcMqP/8962-103-889147665892-1-36532109307541.jpg',
  'https://i.ibb.co/xX67t1n/9003-103-952126157832-1-31991414977495.jpg',
  'https://i.ibb.co/JFd2hb0/9119-103-934135589383-1-35854769757845.jpg',
  'https://i.ibb.co/y682Hyf/9148-103-84882096149-1-33275393482786.jpg',
  'https://i.ibb.co/Hp7Cqg0/9528-103-886386509018-1-38093761148211.jpg',
  'https://i.ibb.co/m89ynwb/9765-103-886576258235-1-29903614245874.jpg',
  'https://i.ibb.co/18szDRq/9834-103-915167524161-1-40508193167389.jpg',
  'https://i.ibb.co/f16Yz7N/10188-103-828278905746-1-44319655784859.jpg',
  'https://i.ibb.co/sVsxz5G/10396-103-687376020797-1-32301216979197.jpg',
  'https://i.ibb.co/FDs12VJ/10480-103-758699183904-1-31736295161644.jpg',
  'https://i.ibb.co/3pWNXMh/10588-103-97534255475-1-37690724605747.jpg',
  'https://i.ibb.co/DMKjd4t/11139-103-789736849123-1-28075411321543.jpg',
  'https://i.ibb.co/DttCkLH/11485-103-88617259338-1-39464939975589.jpg',
  'https://i.ibb.co/4K4vbDg/11671-103-926255336454-1-361667093876.jpg',
  'https://i.ibb.co/YWpHq6k/11678-103-929033696236-1-36726328070099.jpg',
  'https://i.ibb.co/vHwwrz5/11721-103-771499807474-1-42140670202835.jpg',
  'https://i.ibb.co/1dLKH9T/11929-103-900516733293-1-41738818511313.jpg',
  'https://i.ibb.co/2gFSbpJ/12189-103-844021119514-1-31653087480304.jpg',
  'https://i.ibb.co/0C1YjdV/12195-103-623875394965-1-26715735406323.jpg',
  'https://i.ibb.co/FztT4YZ/12449-103-746206371739-1-32588783843228.jpg',
  'https://i.ibb.co/WV5fRjS/12575-103-851037624618-1-31487053077719.jpg',
  'https://i.ibb.co/hd649dG/12935-103-724500844997-1-37844615298932.jpg',
  'https://i.ibb.co/Kj3jw2H/12944-103-826037955869-1-31568727182717.jpg',
  'https://i.ibb.co/s3v1f9t/13224-103-776066483423-1-30166875490602.jpg',
  'https://i.ibb.co/5KbfHSf/13413-103-671752829919-1-31505061700743.jpg',
  'https://i.ibb.co/6BzVcd4/13622-103-902555433244-1-37472455010882.jpg',
  'https://i.ibb.co/qYJF1sZ/13643-103-832310938533-1-37473028396392.jpg',
  'https://i.ibb.co/x5wftY1/13761-103-918381174231-1-31785778873747.jpg',
  'https://i.ibb.co/PCx6XQv/13843-103-799841428701-1-45044388994138.jpg',
  'https://i.ibb.co/5BnYjLp/14097-103-761980799058-1-42958307115587.jpg',
  'https://i.ibb.co/nm6Dbhm/14326-103-932084947158-1-31050963161264.jpg',
  'https://i.ibb.co/T2dv0F9/14502-103-882053798842-1-32117850116705.jpg',
  'https://i.ibb.co/5cYG5dH/14565-103-717331701853-1-34346863765127.jpg',
  'https://i.ibb.co/MS3rLZf/14738-103-882838566224-1-33860520779362.jpg',
  'https://i.ibb.co/vDMhmyt/14748-103-772355906548-1-40795520849126.jpg',
  'https://i.ibb.co/6RgCVJr/15231-103-847555756896-1-37734387662324.jpg',
  'https://i.ibb.co/mG7QtZ7/15432-103-954506765591-1-34803348731768.jpg',
  'https://i.ibb.co/TTJLhfr/15596-103-862973391403-1-28854964227352.jpg',
  'https://i.ibb.co/6gdx5k3/16092-103-904898605608-1-33817446668867.jpg',
  'https://i.ibb.co/9wRWJmD/16431-103-665427689905-1-30688382151422.jpg',
  'https://i.ibb.co/dB2z2bg/16558-103-90068937107-1-39834343568648.jpg',
  'https://i.ibb.co/Y0GLXtp/16712-103-771024195719-1-28821070687855.jpg',
  'https://i.ibb.co/mqj6dXt/17428-103-831672451377-1-28056289614888.jpg',
  'https://i.ibb.co/zfmZf3S/17971-103-89221344847-1-38664418914478.jpg',
  'https://i.ibb.co/7nJLX5m/18040-103-628289434981-1-29300891277833.jpg',
  'https://i.ibb.co/JWLC4tk/18170-103-693481164648-1-32264913744923.jpg',
  'https://i.ibb.co/61sv2fp/19122-103-782998639573-1-4346224290313.jpg',
  'https://i.ibb.co/m8qz4Qt/19256-103-915695607739-1-33197622176572.jpg',
  'https://i.ibb.co/Rh80L39/19586-103-812797206404-1-280739949481.jpg',
  'https://i.ibb.co/3hGmf5P/19900-103-721850724134-1-44909127224226.jpg',
  'https://i.ibb.co/64TL47p/19908-103-823980567315-1-27113627921361.jpg',
  'https://i.ibb.co/hC3vSzr/20004-103-818460673636-1-3225004671725.jpg',
  'https://i.ibb.co/GJgV2Tb/20132-103-920339361154-1-40071975807108.jpg',
  'https://i.ibb.co/sKHZRk2/20150-103-944313579632-1-33257548170052.jpg',
  'https://i.ibb.co/VNLNWhS/20214-103-746826335942-1-37063810784742.jpg',
  'https://i.ibb.co/RgPrgbW/20289-103-766053124908-1-31935522786801.jpg',
  'https://i.ibb.co/sQV9pzQ/20578-103-847529680785-1-31052752546835.jpg',
  'https://i.ibb.co/5845kZ4/20690-103-898131752038-1-40000079453525.jpg',
  'https://i.ibb.co/f9mr06X/20751-103-766697607487-1-37761585088039.jpg',
  'https://i.ibb.co/r4dPd20/20887-103-694604579252-1-31801265050639.jpg',
  'https://i.ibb.co/xhshBLB/20906-103-760018254156-1-38208647625405.jpg',
  'https://i.ibb.co/3kYJkjZ/20950-103-767873688401-1-3719231112243.jpg',
  'https://i.ibb.co/gSBJ50m/21030-103-73165981202-1-39064272039376.jpg',
  'https://i.ibb.co/fvwjD1F/21271-103-836105070346-1-36778745424381.jpg',
  'https://i.ibb.co/CQMnmSd/21592-103-778869800221-1-33827872990912.jpg',
  'https://i.ibb.co/fQvk6N9/21704-103-704871433373-1-32781864396868.jpg',
  'https://i.ibb.co/nsknbB1/22008-103-842826999482-1-27871014381244.jpg',
  'https://i.ibb.co/VmbzpXW/22168-103-762005164779-1-31420241621381.jpg',
  'https://i.ibb.co/yXLb5BP/22434-103-926415826149-1-30926626800285.jpg',
  'https://i.ibb.co/XpbkNJ9/22589-103-767410209669-1-35990597789132.jpg',
  'https://i.ibb.co/NKsBSft/22618-103-796318075113-1-34866859642562.jpg',
  'https://i.ibb.co/dGNJBqT/22758-103-679235704984-1-31254933504438.jpg',
  'https://i.ibb.co/CsXx6ZM/22770-103-935829830299-1-38193808956811.jpg',
  'https://i.ibb.co/qsRXv17/23090-103-676573812761-1-31474815301473.jpg',
  'https://i.ibb.co/jMFRBb1/23217-103-699061536835-1-32646899942087.jpg',
  'https://i.ibb.co/RCSXWfL/23257-103-775686130212-1-43283078700622.jpg',
  'https://i.ibb.co/R67wDjj/23269-103-621545566322-1-27801066667774.jpg',
  'https://i.ibb.co/h9m7bNZ/23399-103-635787614948-1-27574651828276.jpg',
  'https://i.ibb.co/QFLp5JW/23793-103-957484324609-1-36101163840394.jpg',
  'https://i.ibb.co/XYncDxq/23913-103-828805009287-1-4347200946655.jpg',
  'https://i.ibb.co/X72dkmk/24004-103-95604296168-1-37215276251105.jpg',
  'https://i.ibb.co/JQGGBs5/24009-103-953265673751-1-36878466192811.jpg',
  'https://i.ibb.co/kGTW4c0/24202-103-780825744725-1-28514090795563.jpg',
  'https://i.ibb.co/JRN7nn0/24283-103-700763196501-1-34897321760089.jpg',
  'https://i.ibb.co/JF94ndX/24474-103-787784388867-1-29197886337375.jpg',
  'https://i.ibb.co/zHxVFtf/24559-103-738215188009-1-3092275875002.jpg',
  'https://i.ibb.co/G7YYQ5W/24651-103-721488018175-1-31055713276946.jpg',
  'https://i.ibb.co/ngWtQTg/24673-103-770474911121-1-33352195875235.jpg',
  'https://i.ibb.co/0mPpcRt/24764-103-772051502002-1-33843570302755.jpg',
  'https://i.ibb.co/0C5TnBg/24915-103-776684860687-1-37632336820916.jpg',
  'https://i.ibb.co/SmBgJbZ/25131-103-799895360311-1-41564210288546.jpg',
  'https://i.ibb.co/nkydQb2/25194-103-861586168076-1-27119964518479.jpg',
  'https://i.ibb.co/0cbCYDx/25408-103-825070075265-1-43520078016871.jpg',
  'https://i.ibb.co/XxyxLM0/25495-103-774027815029-1-30635942884765.jpg',
  'https://i.ibb.co/2ydggsf/25959-103-945816629896-1-33314358675941.jpg',
  'https://i.ibb.co/YjkBjdc/26132-103-862099930339-1-39772142882315.jpg',
  'https://i.ibb.co/KhDwXpq/26366-103-816687442566-1-33260809851077.jpg',
  'https://i.ibb.co/Lgn6Cwq/26411-103-790297402556-1-27686942783971.jpg',
  'https://i.ibb.co/tDQLr7n/26586-103-787577611219-1-29680082044668.jpg',
  'https://i.ibb.co/WPWStDD/26873-103-79787171458-1-30254247303092.jpg',
  'https://i.ibb.co/8gbsGS3/26880-104-009003553477-1-36830152356197.jpg',
  'https://i.ibb.co/3vhh1G9/27243-103-842992408371-1-27611918742931.jpg',
  'https://i.ibb.co/dbM0rh0/27516-103-962446265088-1-34744356008794.jpg',
  'https://i.ibb.co/YpDrVx8/27660-103-869737759319-1-31002980644779.jpg',
  'https://i.ibb.co/CJ1q3kJ/27698-103-748294012938-1-34883407699474.jpg',
  'https://i.ibb.co/31PDTKF/27827-103-827749564753-1-29500707134836.jpg',
  'https://i.ibb.co/XjzcF2c/27900-103-877627176088-1-29983134789213.jpg',
  'https://i.ibb.co/r6Q2Mct/27998-103-79290109424-1-30685523328475.jpg',
  'https://i.ibb.co/ZzbDBym/28038-103-793897964238-1-33252333779561.jpg',
  'https://i.ibb.co/gzktQFK/28040-103-812967260179-1-32137244011856.jpg',
  'https://i.ibb.co/d4cxyS6/28104-103-856182619326-1-40600319652283.jpg',
  'https://i.ibb.co/MPhszjB/28166-103-883670016873-1-39631501551445.jpg',
  'https://i.ibb.co/vhPV77p/28204-103-828853199276-1-41356507814794.jpg',
  'https://i.ibb.co/qmqzJ3H/28989-103-775161508686-1-36474796461527.jpg',
  'https://i.ibb.co/Bn1XZdC/29044-103-770952625253-1-44138310145607.jpg',
  'https://i.ibb.co/N3M0h0g/29080-103-859235537294-1-28336139547828.jpg',
  'https://i.ibb.co/gtCNY7n/29238-103-787169648757-1-34448122231386.jpg',
  'https://i.ibb.co/L8D8VnS/29342-103-847215189467-1-35429477454857.jpg',
  'https://i.ibb.co/VHRD7y1/30068-103-986267451174-1-3533353493822.jpg',
  'https://i.ibb.co/d4Rj7Pz/30515-103-903783890338-1-33326914323691.jpg',
  'https://i.ibb.co/cYSm5CR/30574-103-793500899072-1-34807390100077.jpg',
  'https://i.ibb.co/HVprkGv/30695-103-73112907434-1-38149353199118.jpg',
  'https://i.ibb.co/p3r3qTf/30724-103-856521367571-1-31750380184728.jpg',
  'https://i.ibb.co/cQSKqJs/30732-103-861399016562-1-33656233782211.jpg',
  'https://i.ibb.co/gVdBxRN/31196-103-703239245479-1-35191145543549.jpg',
  'https://i.ibb.co/3BfKfvN/31309-103-864724048745-1-31970344017588.jpg',
  'https://i.ibb.co/sFjT1zk/31464-103-902087254433-1-31954993348998.jpg',
  'https://i.ibb.co/89Ttc3M/31612-103-629186690372-1-31854844512916.jpg',
  'https://i.ibb.co/2Mh91n7/31796-103-865322661939-1-40424822507032.jpg',
  'https://i.ibb.co/RS4Qxxr/32167-103-979055595225-1-33524609607319.jpg',
  'https://i.ibb.co/g9QPYPy/32658-103-864840254092-1-31604878109185.jpg',
  'https://i.ibb.co/wNTGcN4/32908-103-808368191469-1-27349175628073.jpg',
  'https://i.ibb.co/Km6LjWc/33123-103-834600275363-1-41221456549892.jpg',
  'https://i.ibb.co/FV1XPNk/33219-103-982995757267-1-39183416432564.jpg',
  'https://i.ibb.co/xCNjmtD/33565-103-948108807633-1-3262912911232.jpg',
  'https://i.ibb.co/236DFnt/33599-103-622013660796-1-28265110896975.jpg',
  'https://i.ibb.co/F5Nt6Zc/34118-103-860523829356-1-30366849073491.jpg',
  'https://i.ibb.co/Z8jC7n5/34582-103-628447448137-1-27234982049116.jpg',
  'https://i.ibb.co/N71Ncfq/34756-103-834639457046-1-27593811015307.jpg',
  'https://i.ibb.co/T8Bb7PZ/34762-103-874361476013-1-39453909356192.jpg',
  'https://i.ibb.co/8sPgbv4/34808-103-753342896065-1-39081192303954.jpg',
  'https://i.ibb.co/Thtb9QD/34880-103-791124274904-1-30853494059708.jpg',
  'https://i.ibb.co/HdwSpSf/35079-103-940164416032-1-37123876234117.jpg',
  'https://i.ibb.co/n79dyqk/35146-103-911564265579-1-41670120619033.jpg',
  'https://i.ibb.co/F8tMKGN/35345-103-724378678972-1-31739870646755.jpg',
  'https://i.ibb.co/PQwqdGq/35616-103-816293534867-1-27707672386718.jpg',
  'https://i.ibb.co/zrgcMKg/35664-103-808030113004-1-27732899548668.jpg',
  'https://i.ibb.co/p20LD3M/35840-103-716552045433-1-34009842923476.jpg',
  'https://i.ibb.co/5M31mNr/36709-103-741151384176-1-33391832424377.jpg',
  'https://i.ibb.co/j5bT1zh/36920-103-649456562486-1-32358481344771.jpg',
  'https://i.ibb.co/Jz06X3q/37002-103-631122581859-1-31281869365648.jpg',
  'https://i.ibb.co/7gGW9zm/37294-103-769215923953-1-39020049185026.jpg',
  'https://i.ibb.co/Lx9WGbd/37317-103-752637427974-1-3931411474126.jpg',
  'https://i.ibb.co/gS4Z0KG/37570-103-827877173569-1-2989196684165.jpg',
  'https://i.ibb.co/yVc2CNJ/38084-103-928937237819-1-35265298580802.jpg',
  'https://i.ibb.co/pxcG02F/38260-103-785732704859-1-29502818453393.jpg',
  'https://i.ibb.co/s2FqhvN/38310-103-849741317893-1-30775873215873.jpg',
  'https://i.ibb.co/1fbhGW7/38620-103-837497001759-1-30559339321501.jpg',
  'https://i.ibb.co/KjHK1Gg/39077-104-006101234905-1-37262731975796.jpg',
  'https://i.ibb.co/gPPKzSb/39094-103-719012675099-1-37459286325851.jpg',
  'https://i.ibb.co/XkFRnRq/39435-103-895523613706-1-35516991948954.jpg',
  'https://i.ibb.co/WvXfxys/39463-103-908921262674-1-36513282107885.jpg',
  'https://i.ibb.co/1RhJLp3/39824-103-678286732058-1-34704016300087.jpg',
  'https://i.ibb.co/Lrstyz4/39974-103-924813079958-1-33335270599995.jpg',
  'https://i.ibb.co/Gp70sfX/40268-103-69212077348-1-38088558807285.jpg',
  'https://i.ibb.co/G7y7Yyj/40723-103-630399529936-1-27777545878742.jpg',
  'https://i.ibb.co/W20hM5p/40745-103-888299504607-1-39943170692357.jpg',
  'https://i.ibb.co/kq9594S/41022-103-690346509487-1-38465858351896.jpg',
  'https://i.ibb.co/h1LQSTn/41229-103-795019684971-1-43737060083312.jpg',
  'https://i.ibb.co/HGnZcnd/41611-103-700725725019-1-37255324090181.jpg',
  'https://i.ibb.co/z44Y1Kd/42475-103-839861839931-1-4605788071571.jpg',
  'https://i.ibb.co/9c1f0Rq/42884-103-86993190244-1-37393545932106.jpg',
  'https://i.ibb.co/30CYHW3/43298-103-625250091857-1-3034740260891.jpg',
  'https://i.ibb.co/CH5DwfK/43661-103-699751919704-1-35184605513948.jpg',
  'https://i.ibb.co/tcCZLpF/43964-103-699305082986-1-34915589888758.jpg',
  'https://i.ibb.co/nw79rPt/43994-103-953402442303-1-32383723010426.jpg',
  'https://i.ibb.co/Gc2bZ63/44520-103-785486933606-1-32577953759453.jpg',
  'https://i.ibb.co/C0hb44Z/44767-103-873824488973-1-33218402469472.jpg',
  'https://i.ibb.co/JK0XGB4/44869-103-793696919079-1-34966085521145.jpg',
  'https://i.ibb.co/h8bSWXy/44925-103-966534007882-1-35027784119094.jpg',
  'https://i.ibb.co/4PzG1pB/45008-103-871928027498-1-40001623611742.jpg',
  'https://i.ibb.co/cvnf69S/45049-103-872114717983-1-39206680908312.jpg',
  'https://i.ibb.co/bmZ0b8h/45058-103-87241814872-1-36566120585198.jpg',
  'https://i.ibb.co/mNyBR3F/45543-103-876499238169-1-38708485812151.jpg',
  'https://i.ibb.co/sFJhp84/45604-103-887322518261-1-35563602769821.jpg',
  'https://i.ibb.co/vqj0GbS/45630-103-88044985545-1-363337736928.jpg',
  'https://i.ibb.co/sjDx3xF/46107-103-881036005906-1-35564178938513.jpg',
  'https://i.ibb.co/GRR1n0v/46171-103-901756618682-1-30579943942129.jpg',
  'https://i.ibb.co/313xn1R/46237-103-905461240101-1-40114506153267.jpg',
  'https://i.ibb.co/ydhX6Cm/46727-103-884750626214-1-33942584425057.jpg',
  'https://i.ibb.co/6FPzfy2/46793-103-899364646138-1-38349883694141.jpg',
  'https://i.ibb.co/gZHRsjY/46977-103-902932828033-1-39345337876228.jpg',
  'https://i.ibb.co/ScjB66M/47098-103-7058845383-1-32661508420929.jpg',
  'https://i.ibb.co/WxknKcF/47379-103-924765643004-1-32244290268205.jpg',
  'https://i.ibb.co/CmRW6bt/47596-103-933720114906-1-33380597555949.jpg',
  'https://i.ibb.co/Y3Hvv6N/47734-103-915035213248-1-31146595615862.jpg',
  'https://i.ibb.co/G7FsDM2/48239-103-883802134396-1-3911828709615.jpg',
  'https://i.ibb.co/mGbmTnF/48244-103-871656975553-1-34459603984823.jpg',
  'https://i.ibb.co/55Gd3jL/48254-103-869174507946-1-34439924927715.jpg',
  'https://i.ibb.co/7kYTSVn/48450-103-885551488846-1-34600435281258.jpg',
  'https://i.ibb.co/kJjnW0n/48466-103-885092210172-1-34653639501121.jpg',
  'https://i.ibb.co/0J8NQnY/48606-103-880643401209-1-37115319043665.jpg',
  'https://i.ibb.co/9pJDXNf/48730-103-911024494253-1-32219195201854.jpg',
  'https://i.ibb.co/gjbdSTY/48884-103-934984373934-1-32607708422244.jpg',
  'https://i.ibb.co/XJkRcFj/49096-103-887422496308-1-29821008103964.jpg',
  'https://i.ibb.co/tQM7qn3/49536-103-762564385286-1-3874271966094.jpg',
  'https://i.ibb.co/brj4f49/49994-103-961147064639-1-34333009729117.jpg',
  'https://i.ibb.co/ZYjf3b6/50006-103-961166890088-1-34450576917607.jpg',
  'https://i.ibb.co/pJtMtmV/50776-103-957796123301-1-33699734883417.jpg',
  'https://i.ibb.co/j3GpXvr/50827-103-955790914933-1-35370691267708.jpg',
  'https://i.ibb.co/m5Qdzps/50884-103-954248420013-1-33263357158524.jpg',
  'https://i.ibb.co/4ThPgkC/51079-103-927290779035-1-32031452801177.jpg',
  'https://i.ibb.co/4WLDqLD/51137-103-984646867158-1-39152346619979.jpg',
  'https://i.ibb.co/W3vtCcL/51230-103-938737208549-1-37437702893705.jpg',
  'https://i.ibb.co/HVXmvF2/51435-103-75788423624-1-32108740746737.jpg',
  'https://i.ibb.co/WKkT3DM/51447-103-783739821573-1-32685343231991.jpg',
  'https://i.ibb.co/hd3DyMN/51524-103-63878788047-1-30331752793616.jpg',
  'https://i.ibb.co/j6VS06t/51532-103-632757957025-1-29703219289584.jpg',
  'https://i.ibb.co/yyNKtdJ/51753-103-746706667495-1-37424086604977.jpg',
  'https://i.ibb.co/n67BdmR/52004-103-757917664468-1-4096496831696.jpg',
  'https://i.ibb.co/R0MFXf9/52051-103-674954036594-1-32877607231659.jpg',
  'https://i.ibb.co/wcpjkwg/52184-103-751684102265-1-3225411817849.jpg',
  'https://i.ibb.co/R4PgcZh/52403-103-739496523676-1-37707908460697.jpg',
  'https://i.ibb.co/3h98Rbg/52516-103-741340559128-1-37628079476278.jpg',
  'https://i.ibb.co/5jzQLTN/52907-103-748487342304-1-41274109196038.jpg',
  'https://i.ibb.co/TmGxFtc/52918-103-748092490405-1-29906871670651.jpg',
  'https://i.ibb.co/HpBvs3K/52991-103-755111960012-1-40488648128061.jpg',
  'https://i.ibb.co/cbWq5wd/53061-103-752564404096-1-35260756197706.jpg',
  'https://i.ibb.co/rmRL1HG/53068-103-753348153206-1-32730805966888.jpg',
  'https://i.ibb.co/qF4CBcL/53104-103-74893378701-1-37827922610142.jpg',
  'https://i.ibb.co/b2ZPdnj/53244-103-747792735908-1-32770872244777.jpg',
  'https://i.ibb.co/PM5q322/53733-103-851918525392-1-42629001933582.jpg',
  'https://i.ibb.co/Mc61WwL/53998-103-786758260466-1-32301550587745.jpg',
  'https://i.ibb.co/x8nvQ81/54314-103-782296454323-1-31758139136701.jpg',
  'https://i.ibb.co/k13FtMt/54406-103-814529390104-1-32445686353516.jpg',
  'https://i.ibb.co/0hNf39F/54769-103-910786129858-1-41814715628635.jpg',
  'https://i.ibb.co/YDD7w4T/55173-103-841541439284-1-29934683211046.jpg',
  'https://i.ibb.co/59RnfLh/55378-103-943869896273-1-37359032824039.jpg',
  'https://i.ibb.co/5r7wCsj/55606-103-818117587437-1-44140133415223.jpg',
  'https://i.ibb.co/M2dr5Pj/55655-103-803921781514-1-43312993411324.jpg',
  'https://i.ibb.co/jR6mGfB/55780-103-803297217902-1-43182826605583.jpg',
  'https://i.ibb.co/jbc2jBN/56072-103-772800096512-1-44445474321258.jpg',
  'https://i.ibb.co/dMvCXPJ/56138-103-855805183608-1-31164067729367.jpg',
  'https://i.ibb.co/KrYW8P6/56355-103-774551048848-1-37214805652306.jpg',
  'https://i.ibb.co/HhRS9ng/56489-103-76888747848-1-43156263331483.jpg',
  'https://i.ibb.co/ssDf5Yd/56651-103-763191904026-1-38721523377559.jpg',
  'https://i.ibb.co/r3wsCNV/56805-103-82063642058-1-45224179602942.jpg',
  'https://i.ibb.co/zHkw28g/57156-103-780101827826-1-42792585043885.jpg',
  'https://i.ibb.co/DLmBvkN/58000-103-834780521763-1-37307095732968.jpg',
  'https://i.ibb.co/m48GrKW/58238-103-85590985546-1-34533494838568.jpg',
  'https://i.ibb.co/89WbwGY/58583-103-850523952848-1-39230029168872.jpg',
  'https://i.ibb.co/Ntwv5cs/58811-103-83498453088-1-38875953247225.jpg',
  'https://i.ibb.co/z8MjGhN/58925-103-849469555077-1-42591085571363.jpg',
  'https://i.ibb.co/HNZ74Wk/58994-103-833713381805-1-34983445777133.jpg',
  'https://i.ibb.co/t82p9RS/59257-103-840946627908-1-38153523442379.jpg',
  'https://i.ibb.co/31JjSBQ/59258-103-840598173193-1-38332725029354.jpg',
  'https://i.ibb.co/NZ2MyBB/59643-103-846569116832-1-35490134340034.jpg',
  'https://i.ibb.co/2s1w4p6/60014-103-867407622478-1-36055767261419.jpg',
  'https://i.ibb.co/gwgXn3F/60561-103-910188111186-1-4098189588287.jpg',
  'https://i.ibb.co/ZHHB1VQ/60616-103-902177625245-1-39925027749989.jpg',
  'https://i.ibb.co/tZbfRzz/60792-103-90161516602-1-30835272515434.jpg',
  'https://i.ibb.co/DMnv811/60823-103-900523931262-1-30940994917912.jpg',
  'https://i.ibb.co/ThVv7Fx/61031-103-831414666838-1-45405191857269.jpg',
  'https://i.ibb.co/2dCkSTs/61646-103-865137406203-1-33360035589391.jpg',
  'https://i.ibb.co/F6Lqk1r/62348-103-769050061933-1-43740912758758.jpg',
  'https://i.ibb.co/TbT22VR/62451-103-746887356721-1-43324041368459.jpg',
  'https://i.ibb.co/M977Hv6/62954-103-969374888842-1-33607483272727.jpg',
  'https://i.ibb.co/pvJp8jf/63345-103-828311968714-1-43250839145771.jpg',
  'https://i.ibb.co/4FLPDPn/63883-103-919370542146-1-41192375885964.jpg',
  'https://i.ibb.co/s9Mcy8Z/64136-103-754337914127-1-32783746757683.jpg',
  'https://i.ibb.co/QXHyJ1R/64489-103-794657490462-1-34273446141195.jpg',
  'https://i.ibb.co/tb8jw6t/64645-103-847536064305-1-29351408077193.jpg',
  'https://i.ibb.co/CHb7xvq/64680-103-735863751403-1-44196979650536.jpg',
  'https://i.ibb.co/CHfLD57/64712-103-863249773571-1-32152030388688.jpg',
  'https://i.ibb.co/WgFYNsR/64808-103-913426356031-1-40351988667124.jpg',
  'https://i.ibb.co/KmHNCCr/64857-103-843771564497-1-42359824787723.jpg',
  'https://i.ibb.co/HGpMH1c/64955-103-882515575587-1-30627232247184.jpg',
  'https://i.ibb.co/1Gq9Vjp/64967-103-76865669298-1-31201817334729.jpg',
  'https://i.ibb.co/D9M9T65/65219-103-838170424899-1-3493180136701.jpg',
  'https://i.ibb.co/sFQRS8r/65434-103-766927793607-1-33267426700514.jpg',
  'https://i.ibb.co/mB3yQCd/65457-103-878619823401-1-31501307934101.jpg',
  'https://i.ibb.co/2NJJWdq/65776-103-883740256327-1-31247721865476.jpg',
  'https://i.ibb.co/6YXJSBt/65847-103-884138996358-1-31077035958711.jpg',
  'https://i.ibb.co/18XvT6p/66046-103-816403186912-1-33535510609077.jpg',
  'https://i.ibb.co/h9B92Gf/66052-103-800383569086-1-29628877454303.jpg',
  'https://i.ibb.co/pW2z8s7/66107-103-927388317274-1-31363190196187.jpg',
  'https://i.ibb.co/Sw2YMmt/66204-103-838649737712-1-29141722789309.jpg',
  'https://i.ibb.co/9W22sHq/66921-103-713139746607-1-44484489143752.jpg',
  'https://i.ibb.co/crfYt43/67167-103-926885062538-1-30431863627434.jpg',
  'https://i.ibb.co/rZG6spc/67349-103-874891395445-1-36397577537111.jpg',
  'https://i.ibb.co/j4R108G/68038-103-913424739484-1-31891414090074.jpg',
  'https://i.ibb.co/1dgxqtw/68202-103-84579266732-1-29109639511842.jpg',
  'https://i.ibb.co/pd10NM5/68541-103-821919097125-1-28898352708789.jpg',
  'https://i.ibb.co/Q6CrF61/68581-103-785580641495-1-4267232236882.jpg',
  'https://i.ibb.co/88zmrrG/68700-103-816559044393-1-32267168298468.jpg',
  'https://i.ibb.co/4RKMdGr/68779-103-768639116131-1-36519373596981.jpg',
  'https://i.ibb.co/pWXrbvq/69008-103-91198249438-1-30679537730568.jpg',
  'https://i.ibb.co/j6m0mDW/69034-103-854498805199-1-34868557641236.jpg',
  'https://i.ibb.co/jTV81jY/69548-103-827153681909-1-34283480398949.jpg',
  'https://i.ibb.co/qF0nsZC/69577-103-804820143314-1-29222130810384.jpg',
  'https://i.ibb.co/0hJV8cs/69615-103-885422171407-1-30482790992683.jpg',
  'https://i.ibb.co/2gnkTD4/69799-103-886785399379-1-35470551101976.jpg',
  'https://i.ibb.co/fHSZjz5/69812-103-643186769421-1-34234770469827.jpg',
  'https://i.ibb.co/353pt80/69925-103-767052588614-1-2908446751714.jpg',
  'https://i.ibb.co/SfpBMCj/70094-103-742405658901-1-319189078186.jpg',
  'https://i.ibb.co/GFcddc3/70276-103-987764260835-1-38977524151387.jpg',
  'https://i.ibb.co/7ySpSWY/70335-103-809667033159-1-31780239522258.jpg',
  'https://i.ibb.co/9h39hSL/70547-103-823445886844-1-4482580934276.jpg',
  'https://i.ibb.co/NK7Jtnr/70729-103-776774413687-1-29407334356936.jpg',
  'https://i.ibb.co/sKvMCVc/70901-103-806162212391-1-33425064482827.jpg',
  'https://i.ibb.co/f4VMTrf/71033-103-768652248772-1-43083475777953.jpg',
  'https://i.ibb.co/HHHnT4Q/71153-103-8423784138-1-38400374706225.jpg',
  'https://i.ibb.co/XVwWV6r/71229-103-754691402008-1-43727772372652.jpg',
  'https://i.ibb.co/ZBsDkjc/71282-103-776344767479-1-33769471252552.jpg',
  'https://i.ibb.co/qyfy00W/72026-103-814532454377-1-44307503386583.jpg',
  'https://i.ibb.co/LpFW3kL/72086-103-771501705449-1-44714381776333.jpg',
  'https://i.ibb.co/F50DT0G/72125-103-731983629963-1-33568076035768.jpg',
  'https://i.ibb.co/5WR0kW6/72804-103-923813959255-1-39534197093188.jpg',
  'https://i.ibb.co/hcXyZnC/72824-103-908644628953-1-30527631223609.jpg',
  'https://i.ibb.co/682RgJk/72892-103-983401803694-1-39157350179348.jpg',
  'https://i.ibb.co/Wzg0yNh/73146-103-799779717066-1-44498581388035.jpg',
  'https://i.ibb.co/7RDRysZ/73339-103-845856135121-1-36319457926079.jpg',
  'https://i.ibb.co/427xCnL/73461-103-845379267005-1-28438568083297.jpg',
  'https://i.ibb.co/VvWB6fx/73606-103-801246063432-1-29969688456827.jpg',
  'https://i.ibb.co/qpP0MNt/73713-103-825955874397-1-36927298725744.jpg',
  'https://i.ibb.co/9nkTnRf/73989-103-820229789976-1-27518685421842.jpg',
  'https://i.ibb.co/WGyjdCG/74001-103-853661468801-1-29872889511009.jpg',
  'https://i.ibb.co/pL3XMFT/74097-103-875488972434-1-396364376516.jpg',
  'https://i.ibb.co/LPbSCvg/74202-103-929677322725-1-31854494860857.jpg',
  'https://i.ibb.co/qBSNYzG/74854-103-868598631314-1-37828174234207.jpg',
  'https://i.ibb.co/n08qrjR/75192-103-777924921369-1-30828245409122.jpg',
  'https://i.ibb.co/mDHzmLB/75231-103-937896866608-1-35383488221622.jpg',
  'https://i.ibb.co/GRJzM0y/75301-103-932839501324-1-32575733870424.jpg',
  'https://i.ibb.co/TKYqNTR/75335-103-88284625058-1-32107110259534.jpg',
  'https://i.ibb.co/V37cLDC/75422-103-849082453702-1-29219423232481.jpg',
  'https://i.ibb.co/L57VTj0/75725-103-953723624829-1-35293639125388.jpg',
  'https://i.ibb.co/JBv4LB2/75886-103-848167671053-1-34154706628159.jpg',
  'https://i.ibb.co/N6VQ30c/75927-103-974495754117-1-35243159130085.jpg',
  'https://i.ibb.co/DCBqg7C/76371-103-784437121221-1-288917715185.jpg',
  'https://i.ibb.co/qy9kNhD/76456-103-842360997269-1-24770203313437.jpg',
  'https://i.ibb.co/QdBpjL1/76723-103-964369828023-1-33462840966041.jpg',
  'https://i.ibb.co/gTq3c79/76866-103-802497576626-1-45988776840752.jpg',
  'https://i.ibb.co/6BzQqqz/77057-103-811627733797-1-45447515732624.jpg',
  'https://i.ibb.co/HpMsfHh/77067-103-810594994486-1-45064509725295.jpg',
  'https://i.ibb.co/TgQCSYS/77237-103-923307869812-1-34723501972736.jpg',
  'https://i.ibb.co/Gcmbn8c/77397-103-896070824952-1-39672701093723.jpg',
  'https://i.ibb.co/sR8G627/77591-103-967697609183-1-35336484590695.jpg',
  'https://i.ibb.co/xSnhP3m/77608-103-770060928207-1-36703371037607.jpg',
  'https://i.ibb.co/9Vf7PXr/77627-103-814549410989-1-28661357435112.jpg',
  'https://i.ibb.co/zJ1MRcD/77847-103-86018781283-1-36917146623924.jpg',
  'https://i.ibb.co/B3FjhN2/78114-103-913303546214-1-31849671730732.jpg',
  'https://i.ibb.co/TvQ9Nct/78440-103-938010950663-1-33682142944237.jpg',
  'https://i.ibb.co/Gn2KDLD/78846-103-756083777479-1-43709897528658.jpg',
  'https://i.ibb.co/WGbMsHq/79252-103-777137454802-1-31924060382601.jpg',
  'https://i.ibb.co/HGsPNk9/79298-103-924234646448-1-31501335144199.jpg',
  'https://i.ibb.co/jvm8GFc/79902-103-881621430758-1-33204310081161.jpg',
  'https://i.ibb.co/BfHGZXZ/80019-103-876021729155-1-33042449028175.jpg',
  'https://i.ibb.co/Jd8NnPy/80101-103-844602977328-1-32165473570868.jpg',
  'https://i.ibb.co/rZbgHhZ/80236-103-845602219936-1-37058776855699.jpg',
  'https://i.ibb.co/wc9YKxt/80808-103-954987140658-1-36123119578642.jpg',
  'https://i.ibb.co/BN5YJJn/80946-103-651024736419-1-31897904448885.jpg',
  'https://i.ibb.co/8KY26Lk/80988-103-951270437658-1-3616399264394.jpg',
  'https://i.ibb.co/yhbPYdW/81004-103-940958264602-1-34521840923011.jpg',
  'https://i.ibb.co/8Bjgthh/81109-103-839432938361-1-34184886640358.jpg',
  'https://i.ibb.co/5kQMGcq/81321-103-848040541479-1-28692733850086.jpg',
  'https://i.ibb.co/yWjNGSv/81492-103-651849592077-1-31715543191631.jpg',
  'https://i.ibb.co/VD85QBJ/81717-103-724309821133-1-33472384541861.jpg',
  'https://i.ibb.co/Y8x4r0m/81856-103-976439619385-1-38792717931162.jpg',
  'https://i.ibb.co/yBNJQkN/81860-103-766501140727-1-42997660676465.jpg',
  'https://i.ibb.co/z4tpN4d/81985-103-792195145567-1-43086259622835.jpg',
  'https://i.ibb.co/X4cWvv3/82220-103-892431475479-1-38486442959941.jpg',
  'https://i.ibb.co/HpDStcm/82498-103-779323054283-1-29470353271552.jpg',
  'https://i.ibb.co/Tqy5K34/82719-103-959283420265-1-34936453288.jpg',
  'https://i.ibb.co/4PWGDr4/82873-103-800390587343-1-27336954119745.jpg',
  'https://i.ibb.co/Tbtrpjz/83023-103-84253157425-1-36286217705203.jpg',
  'https://i.ibb.co/SPSHxb8/83136-103-754822832253-1-4364797153292.jpg',
  'https://i.ibb.co/Y8sghSZ/83276-103-855965120019-1-31458931921101.jpg',
  'https://i.ibb.co/VJ25yxZ/83322-103-905507613858-1-41010248200453.jpg',
  'https://i.ibb.co/TrBrykY/83867-103-702596631163-1-43479676442148.jpg',
  'https://i.ibb.co/DwHjKwd/83943-103-826146479638-1-26601169666022.jpg',
  'https://i.ibb.co/2gvFwrw/84154-103-822084092164-1-38569515688154.jpg',
  'https://i.ibb.co/3f4N2Cr/84192-103-80939457152-1-45426582526493.jpg',
  'https://i.ibb.co/CJDJD5v/84375-103-8404308947-1-30682812846296.jpg',
  'https://i.ibb.co/VSq5nBP/84418-103-846413556978-1-36307038488984.jpg',
  'https://i.ibb.co/3W6wfGv/84565-103-822590650106-1-26501053507565.jpg',
  'https://i.ibb.co/0GKz4Rs/84762-103-831234099717-1-25364419308941.jpg',
  'https://i.ibb.co/XDNvHD4/84792-103-850211937714-1-39282276429549.jpg',
  'https://i.ibb.co/54NMQN0/84862-103-927448302617-1-30473925409597.jpg',
  'https://i.ibb.co/y0WDmyG/84935-103-85663148215-1-40019930720507.jpg',
  'https://i.ibb.co/8DtYq7b/85220-103-739267972289-1-32063589839691.jpg',
  'https://i.ibb.co/r548LTy/85493-103-894473133934-1-36394118943167.jpg',
  'https://i.ibb.co/cJY0md3/85734-103-626845134442-1-31289574334769.jpg',
  'https://i.ibb.co/gFrKskz/85876-103-916698764321-1-37956503061257.jpg',
  'https://i.ibb.co/tzbzzC2/85984-103-975255252255-1-36024712424636.jpg',
  'https://i.ibb.co/XbGxWxJ/86393-103-860896445728-1-28254162628457.jpg',
  'https://i.ibb.co/g4fWW4L/86404-103-880416786446-1-30864962526561.jpg',
  'https://i.ibb.co/ypDPX2B/86656-103-822059282397-1-33643926626602.jpg',
  'https://i.ibb.co/d2QZ3vy/86808-103-678452503693-1-32803208871469.jpg',
  'https://i.ibb.co/BsLh64k/86983-103-945652622972-1-34850369921029.jpg',
  'https://i.ibb.co/5K3YRT8/87082-103-719026641998-1-33534299179013.jpg',
  'https://i.ibb.co/vmGMHy2/87123-103-970943110907-1-32359670207896.jpg',
  'https://i.ibb.co/JzZDcMY/87362-103-965442065863-1-36250242768631.jpg',
  'https://i.ibb.co/MPq94q0/88652-103-791712324039-1-43089928995446.jpg',
  'https://i.ibb.co/7VDNmzj/88701-103-657150776536-1-31772639459914.jpg',
  'https://i.ibb.co/HNtdSZ2/88746-103-650337202467-1-33209257592548.jpg',
  'https://i.ibb.co/fxCRS7k/88961-103-744852908088-1-41417273579346.jpg',
  'https://i.ibb.co/Drd5fwY/89442-103-781991209892-1-40760674667352.jpg',
  'https://i.ibb.co/Ky2Gh2D/90026-103-948242021379-1-32980592874002.jpg',
  'https://i.ibb.co/1MwhsNQ/90113-103-637017747125-1-28931707132668.jpg',
  'https://i.ibb.co/y5Kdr2H/90190-103-746981885219-1-40363624155366.jpg',
  'https://i.ibb.co/7vzwBQ3/90264-103-84361742179-1-42091682985924.jpg',
  'https://i.ibb.co/4RZ4Q2d/90466-103-870699197726-1-34110925972012.jpg',
  'https://i.ibb.co/kQNPZsB/90560-103-769527449968-1-35363350995469.jpg',
  'https://i.ibb.co/nD7kWmt/90893-103-743843794522-1-34155002537229.jpg',
  'https://i.ibb.co/GTvtJp5/91242-103-765036985949-1-36839181692378.jpg',
  'https://i.ibb.co/1K8Fq7N/91353-103-81675176237-1-45468396248947.jpg',
  'https://i.ibb.co/25BzFpk/91839-103-879769755467-1-38972643571651.jpg',
  'https://i.ibb.co/34tFCNb/91917-103-889665626814-1-32296338793044.jpg',
  'https://i.ibb.co/2gfbQp7/92069-103-860760789188-1-36212557341103.jpg',
  'https://i.ibb.co/ZmJvwQ6/Street-View-360-0.jpg',
  'https://i.ibb.co/wrmbrfb/Street-View-360-2.jpg',
  'https://i.ibb.co/4Nw960t/Street-View-360-4.jpg',
  'https://i.ibb.co/JkSvz55/Street-View-360-6.jpg',
  'https://i.ibb.co/ctYjxsP/Street-View-360-8.jpg',
  'https://i.ibb.co/yPX7y3Q/Street-View-360-10.jpg',
  'https://i.ibb.co/QCpf0ph/Street-View-360-12.jpg',
  'https://i.ibb.co/FJ7k0b3/Street-View-360-14.jpg',
  'https://i.ibb.co/nmgBGHC/Street-View-360-16.jpg',
  'https://i.ibb.co/yBGrcyV/Street-View-360-18.jpg',
  'https://i.ibb.co/hspMpRp/Street-View-360-20.jpg',
  'https://i.ibb.co/hc9dwdR/Street-View-360-22.jpg',
  'https://i.ibb.co/W3JFtwC/Street-View-360-24.jpg',
  'https://i.ibb.co/cbYJhdj/Street-View-360-26.jpg',
  'https://i.ibb.co/WzDf8N5/Street-View-360-28.jpg',
  'https://i.ibb.co/tXdyxMC/Street-View-360-30.jpg',
  'https://i.ibb.co/k5R1pj3/Street-View-360-32.jpg',
  'https://i.ibb.co/51HwKmF/Street-View-360-34.jpg',
  'https://i.ibb.co/RQmq5s7/Street-View-360-36.jpg',
  'https://i.ibb.co/VVWMQXw/Street-View-360-38.jpg',
  'https://i.ibb.co/YDX7MTY/Street-View-360-40.jpg',
  'https://i.ibb.co/0VwGcDQ/Street-View-360-42.jpg',
  'https://i.ibb.co/Sn9Qs0J/Street-View-360-44.jpg',
  'https://i.ibb.co/gFSCG5g/Street-View-360-46.jpg',
  'https://i.ibb.co/JCfbzyf/Street-View-360-48.jpg',
  'https://i.ibb.co/LrbyDNz/Street-View-360-50.jpg',
  'https://i.ibb.co/6grzNGN/Street-View-360-52.jpg',
  'https://i.ibb.co/RhcZPVq/Street-View-360-54.jpg',
  'https://i.ibb.co/MnYjFFd/Street-View-360-56.jpg',
  'https://i.ibb.co/kXMFjCJ/Street-View-360-58.jpg',
  'https://i.ibb.co/19jdVGw/Street-View-360-60.jpg',
  'https://i.ibb.co/h86Dpdg/Street-View-360-62.jpg'
  ];

const imageChoicesMap = {};

// Generate a random, non-repeating subset of four image urls.
function getRandomImages(questionName) {
  let images = [...imageUrls]; // Copy the array.
  let result = [];
  for (let i = 0; i < 4; i++) {
    
    const randomIndex = Math.floor(Math.random() * images.length);
    const imageName = images[randomIndex].split('/').pop(); // Extract the image name from the URL.
    result.push({
      value: imageName, // Using the image URL as the value.
      imageLink: images[randomIndex]
    });
    images.splice(randomIndex, 1); // Remove the selected image from the array to avoid repetition.
  }
  imageChoicesMap[questionName] = result; // Store the two images for the given question name.
  return result;
}


const surveyJson = {
  "title": "Urban Streetscape Perception Survey",
  "description": "Hello! Welcome to the survey! This is the Urban Analytics Lab at the National University of Singapore. We are currently conducting an online urban streetscape perception survey that will take approximately 15 minutes to complete and consists of around 50 street view image selection questions. Throughout the survey, participants' main task is to select the most suitable street view image among every four images based on question descriptions and personal impressions of the streetscapes in those images. All adults over 18 living in Singapore are welcome to take the online survey. As a token of appreciation, participants who successfully complete the online survey will receive a compensation fee of SGD 5 dollars. ",
  "logo": "https://api.surveyjs.io/private/Surveys/files?name=8fb3943d-2606-4486-88ad-a41ad27f4570",
  "logoPosition": "right",
  "pages": [
   {
    "name": "page1",
    "elements": [
     {
      "type": "imagepicker",
      "name": "comfort1",
      "title": "Among the provided street view images, which place do you perceive to be the most comfortable?",
      "choices": getRandomImages("comfort1"),
      "imageFit": "cover"
     },
     {
      "type": "imagepicker",
      "name": "comfort2",
      "title": "Among the provided street view images, which place do you perceive to be the most comfortable?",
      "choices": getRandomImages("comfort2")
     },
     {
      "type": "imagepicker",
      "name": "comfort3",
      "title": "Among the provided street view images, which place do you perceive to be the most comfortable?",
      "choices": getRandomImages("comfort3")
     },
     {
      "type": "imagepicker",
      "name": "comfort4",
      "title": "Among the provided street view images, which place do you perceive to be the most comfortable?",
      "choices": getRandomImages("comfort4")
     },
     {
      "type": "imagepicker",
      "name": "comfort5",
      "title": "Among the provided street view images, which place do you perceive to be the most comfortable?",
      "choices": getRandomImages("comfort5")
     },
     {
      "type": "imagepicker",
      "name": "comfort6",
      "title": "Among the provided street view images, which place do you perceive to be the most comfortable?",
      "choices": getRandomImages("comfort6")
     }
    ],
    "title": "Part 1: Streetscape Comfort Perception",
    "description": "Please choose the image which you find to have the most comfortable streetscape, there are six sets of images in this section."
   },
   {
    "name": "page3",
    "elements": [
     {
      "type": "imagepicker",
      "name": "comfort7",
      "title": "Among the provided street view images, which place do you perceive to have the best thermal comfort (heat comfort) ?",
      "choices": getRandomImages("comfort7")
     },
     {
      "type": "imagepicker",
      "name": "comfort8",
      "title": "Among the provided street view images, which place do you perceive to have the best thermal comfort (heat comfort) ?",
      "choices": getRandomImages("comfort8")
     },
     {
      "type": "imagepicker",
      "name": "comfort9",
      "title": "Among the provided street view images, which place do you perceive to have the best thermal comfort (heat comfort) ?",
      "choices": getRandomImages("comfort9")
     },
     {
      "type": "imagepicker",
      "name": "comfort10",
      "title": "Among the provided street view images, which place do you perceive to have the best thermal comfort (heat comfort) ?",
      "choices": getRandomImages("comfort10")
     },
     {
      "type": "imagepicker",
      "name": "comfort11",
      "title": "Among the provided street view images, which place do you perceive to have the best thermal comfort (heat comfort) ?",
      "choices": getRandomImages("comfort11")
     },
     {
      "type": "imagepicker",
      "name": "comfort12",
      "title": "Among the provided street view images, which place do you perceive to have the best thermal comfort (heat comfort) ?",
      "choices": getRandomImages("comfort12")
     }
    ],
    "title": "Part 2: Streetscape Thermal Comfort (Heat Comfort) Perception",
    "description": "Please choose the image in which you think to have the best thermal comfort (heat comfort), there are six sets of images in this section."
   },
   {
    "name": "page4",
    "elements": [
     {
      "type": "imagepicker",
      "name": "temp",
      "title": "Among the provided street view images, which place do you perceive to exhibit the highest outdoor temperature ?",
      "choices": getRandomImages("temp")
     },
     {
      "type": "imagepicker",
      "name": "intensity",
      "title": "Among the provided street view images, which place do you perceive to exhibit the highest sunlight intensity?",
      "choices": getRandomImages("intensity")
     },
     {
      "type": "imagepicker",
      "name": "heatsources",
      "title": "Among the provided street view images, which place do you perceive to have more artificial heat sources (building, etc.)?",
      "choices": getRandomImages("heatsources")
     },
     {
      "type": "imagepicker",
      "name": "humidity",
      "title": "Among the provided street view images, which place do you perceive to showcase higher humidity?",
      "choices": getRandomImages("humidity")
     },
     {
      "type": "imagepicker",
      "name": "velocity",
      "title": "Among the provided street view images, which place do you perceive to showcase  higher wind velocity?",
      "choices": getRandomImages("velocity")
     },
     {
      "type": "imagepicker",
      "name": "traffic",
      "title": "Among the provided street view images, which place do you perceive to have higher traffic flow?",
      "choices": getRandomImages("traffic")
     },
     {
      "type": "imagepicker",
      "name": "greenery",
      "title": "Among the provided street view images, which place do you perceive to have the highest abundance of greenery?",
      "choices": getRandomImages("greenery")
     },
     {
      "type": "imagepicker",
      "name": "shading",
      "title": "Among the provided street view images, which place do you perceive to have the highest extent of shading areas?",
      "choices": getRandomImages("shading")
     },
     {
      "type": "imagepicker",
      "name": "material",
      "title": "Among the provided street view images, which place do you perceive to exhibit the most comfortable construction material?",
      "choices": getRandomImages("material")
     }
    ],
    "title": "Part 3: Streetscape Environment Perception"
   },
   {
    "name": "page2",
    "elements": [
     {
      "type": "imagepicker",
      "name": "imageability",
      "title": "Among the provided street view images, which place do you perceive to impress you more?",
      "choices": getRandomImages("imageability")
     },
     {
      "type": "imagepicker",
      "name": "enclosure",
      "title": "Among the provided street view images, which place do you perceive to be more enclosed ?",
      "choices": getRandomImages("enclosure")
     },
     {
      "type": "imagepicker",
      "name": "humanscale",
      "title": "Among the provided street view images, which place do you perceive to be more human-friendly?",
      "choices": getRandomImages("humanscale")
     },
     {
      "type": "imagepicker",
      "name": "transparency",
      "title": "Among the provided street view images, which place do you perceive to showcase higher transparency?",
      "choices": getRandomImages("transparency")
     },
     {
      "type": "imagepicker",
      "name": "complexity",
      "title": "Among the provided street view images, which place do you perceive to showcase higher complexity?",
      "choices": getRandomImages("complexity")
     }
    ],
    "title": "Part 4: Streetscape Design Perception"
   },
   {
    "name": "page5",
    "elements": [
     {
      "type": "imagepicker",
      "name": "safe",
      "title": "Among the provided street view images, which place do you perceive to be safer?",
      "choices": getRandomImages("safe")
     },
     {
      "type": "imagepicker",
      "name": "lively",
      "title": "Among the provided street view images, which place do you perceive to be livelier?",
      "choices": getRandomImages("lively")
     },
     {
      "type": "imagepicker",
      "name": "beautiful",
      "title": "Among the provided street view images, which place do you perceive to be more beautiful?",
      "choices": getRandomImages("beautiful")
     },
     {
      "type": "imagepicker",
      "name": "wealthy",
      "title": "Among the provided street view images, which place do you perceive to be more wealthier?",
      "choices": getRandomImages("wealthy")
     },
     {
      "type": "imagepicker",
      "name": "boring",
      "title": "Among the provided street view images, which place do you perceive to be more boring?",
      "choices": getRandomImages("boring")
     },
     {
      "type": "imagepicker",
      "name": "depressing",
      "title": "Among the provided street view images, which place do you perceive to be more depressing?",
      "choices": getRandomImages("depressing")
     }
    ],
    "title": "Part 5: Streetscape Emotion Perception"
   },
   {
    "name": "page6",
    "elements": [
     {
      "type": "image",
      "name": "image1",
      "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=0b53e835-c466-48b4-91f4-eae77a212f7c",
      "imageFit": "cover",
      "imageHeight": "auto",
      "imageWidth": "100%"
     },
     {
      "type": "ranking",
      "name": "eatingdrinking",
      "title": "If you are looking for a place to enjoy food and drinks outdoors, what spatial feature holds the highest importance to you? (Drag to rank in descending order of importance) ",
      "description": "\n",
      "setValueIf": "{eatingdrinking} allof ['Item 1']",
      "isRequired": true,
      "choices": [
       {
        "value": "perception",
        "text": "Streetscape Perception (comfort, environment, emotion, etc)"
       },
       {
        "value": "function",
        "text": "Functionality (quality, density)"
       },
       {
        "value": "accessibility",
        "text": "Accessibility (global, local, transportation service)"
       },
       {
        "value": "contact",
        "text": "Contact Density (vibrant / peaceful)"
       }
      ]
     },
     {
      "type": "image",
      "name": "image2",
      "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=79db2cf2-9702-42fb-b1f2-fb376ecbbab4",
      "imageFit": "cover",
      "imageHeight": "auto",
      "imageWidth": "100%"
     },
     {
      "type": "ranking",
      "name": "nature",
      "title": "If you are seeking a place for nature exploration, what spatial feature holds the highest importance to you? (Drag to rank in descending order of importance) ",
      "description": "\n",
      "setValueIf": "{nature} allof ['Item 1']",
      "isRequired": true,
      "choices": [
       {
        "value": "perception",
        "text": "Streetscape Perception (comfort, environment, emotion, etc)"
       },
       {
        "value": "function",
        "text": "Functionality (quality, density)"
       },
       {
        "value": "accessibility",
        "text": "Accessibility (global, local, transportation service)"
       },
       {
        "value": "contact",
        "text": "Contact Density (vibrant / peaceful)"
       }
      ]
     },
     {
      "type": "image",
      "name": "image3",
      "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=3aef7ca4-fffd-498e-a9d1-7e461a822cf9",
      "imageFit": "cover",
      "imageHeight": "auto",
      "imageWidth": "100%"
     },
     {
      "type": "ranking",
      "name": "community",
      "title": "If you are seeking a place for community gathering, what spatial feature holds the highest importance to you? (Drag to rank in descending order of importance) ",
      "description": "\n",
      "setValueIf": "{community} allof ['Item 1']",
      "isRequired": true,
      "choices": [
       {
        "value": "perception",
        "text": "Streetscape Perception (comfort, environment, emotion, etc)"
       },
       {
        "value": "function",
        "text": "Functionality (quality, density)"
       },
       {
        "value": "accessibility",
        "text": "Accessibility (global, local, transportation service)"
       },
       {
        "value": "contact",
        "text": "Contact Density (vibrant / peaceful)"
       }
      ]
     },
     {
      "type": "image",
      "name": "image4",
      "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=bd89a7f7-4614-49b6-bfcc-3c90f12289c4",
      "imageFit": "cover",
      "imageHeight": "auto",
      "imageWidth": "100%"
     },
     {
      "type": "ranking",
      "name": "walking",
      "title": "If you are seeking a place for city walking / exercising what spatial feature holds the highest importance to you? (Drag to rank in descending order of importance) ",
      "description": "\n",
      "setValueIf": "{walking} allof ['Item 1']",
      "isRequired": true,
      "choices": [
       {
        "value": "perception",
        "text": "Streetscape Perception (comfort, environment, emotion, etc)"
       },
       {
        "value": "function",
        "text": "Functionality (quality, density)"
       },
       {
        "value": "accessibility",
        "text": "Accessibility (global, local, transportation service)"
       },
       {
        "value": "contact",
        "text": "Contact Density (vibrant / peaceful)"
       }
      ]
     },
     {
      "type": "image",
      "name": "image5",
      "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=0df23fc8-4358-4ba7-8b08-6dfe850a19f5",
      "imageFit": "cover",
      "imageHeight": "auto",
      "imageWidth": "100%"
     },
     {
      "type": "ranking",
      "name": "sightseeing",
      "title": "If you are seeking a place for urban sightseeing, what spatial feature holds the highest importance to you? (Drag to rank in descending order of importance) ",
      "description": "\n",
      "setValueIf": "{sightseeing} allof ['Item 1']",
      "isRequired": true,
      "choices": [
       {
        "value": "perception",
        "text": "Streetscape Perception (comfort, environment, emotion, etc)"
       },
       {
        "value": "function",
        "text": "Functionality (quality, density)"
       },
       {
        "value": "accessibility",
        "text": "Accessibility (global, local, transportation service)"
       },
       {
        "value": "contact",
        "text": "Contact Density (vibrant / peaceful)"
       }
      ]
     }
    ],
    "title": "Part 6: Spatial Preference for Social Activity",
    "description": "For following questions, please rank the following four dimensions in descending order of importance.\n\n1) Streetscape Perception: Whether the surrounding urban environment offers a comfortable experience.\n\n2) Functionality: Whether the surrounding urban function quality and density can meet requirements.\n\n3) Accessibility: Whether the location is easily accessible by walking or public transportation.\n\n4) Contact Density: Whether the location is lively or quiet based on population density."
   },
   {
    "name": "page7",
    "elements": [
     {
      "type": "ranking",
      "name": "perception",
      "title": "Considering the spatial feature of Streetscape Perception, rank the activities based on how important you believe the experience brought by the streetscape are for each activity. ",
      "description": "(Drag to rank in descending order of importance of Streetscape Perception on bahaviours) \n",
      "setValueIf": "{perception} allof ['Item 1']",
      "isRequired": true,
      "choices": [
       {
        "value": "eating",
        "text": "Eating / Drinking"
       },
       {
        "value": "nature",
        "text": "Nature Exploration"
       },
       {
        "value": "community",
        "text": "Community Gathering"
       },
       {
        "value": "walking",
        "text": "City Walking / Exercising"
       },
       {
        "value": "sightseeing",
        "text": "Urban Sightseeing"
       }
      ]
     },
     {
      "type": "ranking",
      "name": "functionality",
      "title": "Considering the spatial feature of Functionality, rank the  based on how important you believe the quality and density of urban functions are for each activity. ",
      "description": "(Drag to rank in descending order of importance of Functionality on behaviours) \n",
      "setValueIf": "{functionality} allof ['Item 1']",
      "isRequired": true,
      "choices": [
       {
        "value": "eating",
        "text": "Eating / Drinking"
       },
       {
        "value": "nature",
        "text": "Nature Exploration"
       },
       {
        "value": "community",
        "text": "Community Gathering"
       },
       {
        "value": "walking",
        "text": "City Walking / Exercising"
       },
       {
        "value": "sightseeing",
        "text": "Urban Sightseeing"
       }
      ]
     },
     {
      "type": "ranking",
      "name": "accessibility",
      "title": "Considering the spatial feature of Accessibility, rank the  based on how important you believe the accessibility of a location are for each activity. ",
      "description": "(Drag to rank in descending order of importance of Accessibility on behaviours) \n",
      "setValueIf": "{accessibility} allof ['Item 1']",
      "isRequired": true,
      "choices": [
        {
         "value": "eating",
         "text": "Eating / Drinking"
        },
        {
         "value": "nature",
         "text": "Nature Exploration"
        },
        {
         "value": "community",
         "text": "Community Gathering"
        },
        {
         "value": "walking",
         "text": "City Walking / Exercising"
        },
        {
         "value": "sightseeing",
         "text": "Urban Sightseeing"
        }
       ]
     },
     {
      "type": "ranking",
      "name": "contact",
      "title": "Considering the spatial feature of Contact Density, rank the activities based on how important you believe the contact density (vibrant / peaceful) at a location are for each activity. ",
      "description": "(Drag to rank in descending order of importance of Contact Density on behaviours) \n",
      "setValueIf": "{contact} allof ['Item 1']",
      "isRequired": true,
      "choices": [
        {
         "value": "eating",
         "text": "Eating / Drinking"
        },
        {
         "value": "nature",
         "text": "Nature Exploration"
        },
        {
         "value": "community",
         "text": "Community Gathering"
        },
        {
         "value": "walking",
         "text": "City Walking / Exercising"
        },
        {
         "value": "sightseeing",
         "text": "Urban Sightseeing"
        }
       ]
     }
    ],
    "title": "Part 7: Social Activity Preference for Spatial Feature",
    "description": "For following questions, please rank the following five behaviours in descending order of importance of spatial features on behaviours, when specific spatial feature is considered.\n\n1) Eating / Drinking\n2) Nature Exploration\n3) Community Gathering\n4) City Walking / Exercising\n5) Urban Sightseeing\n\nSpecific considered spatial feature:\n\n1) Streetscape Perception (comfort, environment, emotion, etc)\n2) Functionality (quality, density)\n3) Accessibility (global, local, transportation service)\n4) Contact Density (vibrant / peaceful)\n\n"
   }
  ],
  "showProgressBar": "aboveheader",
  "progressBarType": "questions",
  "autoGrowComment": true,
  "showPreviewBeforeComplete": "showAllQuestions"
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

    // List of image selection question names
    const imageQuestionNames = [
      'comfort1', 
      'comfort2', 
      'comfort3', 
      'comfort4',
      'comfort5',
      'comfort6',
      'comfort7',
      'comfort8',
      'comfort9',
      'comfort10',
      'comfort11',
      'comfort12',
      'temp',
      'intensity',
      'heatsources',
      'humidity',
      'velocity',
      'traffic',
      'greenery',
      'shading',
      'material',
      'imageability',
      'enclosure',
      'humanscale',
      'transparency',
      'complexity',
      'safe',
      'lively',
      'beautiful',
      'wealthy',
      'boring',
      'depressing'
      // Add more names as necessary
    ];

    // Iterate through image selection questions
    imageQuestionNames.forEach(questionName => {
      const selectedValue = survey.data[questionName];
      if (selectedValue) {
        // Use the imageChoicesMap to get the unselected image.
        const allImages = imageChoicesMap[questionName] || [];
        const unselectedImages = allImages
          .filter(choice => choice.value !== selectedValue)
          .map(choice => choice.value);

        // Combine selected image name with unselected ones
        data[questionName] = selectedValue + ',' + unselectedImages.join(',');
      } else {
        // Handle cases where no image is selected
        data[questionName] = "None";
      }
    });

    // Assuming you also have specific names for ranking questions
    const rankingQuestionNames = [
      'eatingdrinking',
      'nature',
      'community',
      'walking',
      'sightseeing',
      'perception',
      'functionality',
      'accessibility',
      'contact'
      // Add more names as necessary
    ];

    // Directly store ranking question responses
    rankingQuestionNames.forEach(questionName => {
      data[questionName] = survey.data[questionName] || "None";
    });

    saveSurveyResult(data); 
  });
  
  return <Survey model={model} />;
}
