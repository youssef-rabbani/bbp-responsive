/*
 *    Fill in host and port for Qlik engine
 */
var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );

var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};
//to avoid errors in workbench: you can remove this when you have added an app
var app;
require.config({
	baseUrl: (config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "" ) + config.prefix + "resources"
});

require(["js/qlik"], function (qlik) {
	window.qlik = qlik;
	
	qlik.setOnError( function (error) {
		console.log(error);
	});

		qlik.theme.apply('Tourism-theme').then(function(result) {

          if(result)

              console.log('theme applied!');

          else

              console.warn('could not apply theme!');

     });

	//callbacks -- inserted here --
	//open apps -- inserted here --

	var app = qlik.openApp('BBP.qvf', config);












	
		app.bookmark.apply('fecea4fa-4973-4d52-a59a-56b5aaa1eb0a');
	
	
	//create cubes and lists -- inserted here --

			//get objects -- inserted here --
	app.getObject('QV-0-1','76b28306-474b-4094-b551-ed3fe47d3b5a');
	
	
	
	
	
	
	
	
	
	
	
	
	
	app.getObject('C-2','b8a0451e-7d0d-490d-a92f-67c6edae10f2');
	
	app.getObject('QV-4-4','HQccU');
	app.getObject('QV-4-3','JHkUFQ');
	app.getObject('QV-4-2','PAxcs');
	app.getObject('QV-4-1','pTUWJ');
	app.getObject('QV-1-o','JwpVVH');
	app.getObject('QV-1-10','NbpjpHx');
	app.getObject('QV-1-11','sKnjU');
	app.getObject('QV-4-5','JTvAsGn');
	app.getObject('QV-4-6','PaqpzJu');
	app.getObject('QV-1-13','LXHpM');
	app.getObject('QV-1-1','WXRzAT');
	app.getObject('QV-1-7','ZUdM');
	app.getObject('QV-1-8','njGNYnM');
	app.getObject('QV-1-2','amsjxa');
	app.getObject('QV-1-3','EECpnA');
	app.getObject('QV-1-4','mSBSJWS');
	app.getObject('QV-1-5','uKdPP');
	app.getObject('QV-1-6','HxYMaJC');
	app.getObject('QV-1-9','HHQpG');
	app.getObject('QV-1-12','EXBkF');
	app.getObject('QV-1-14','TSAhqN');
	app.getObject('QV-1-15','dGMdm');
	app.getObject('QV-1-16','vBgqtp');
	app.getObject('QV-1-17','cNgUeHP');
	app.getObject('QV-1-18','nVpJPa');
	app.getObject('QV-1-19','ApAcKFt');
	app.getObject('QV-1-20','mXBh');
	app.getObject('QV-1-21','FxnvX');
	app.getObject('QV-1-22','QDLpDd');
	app.getObject('QV-1-23','MHdBW');
	app.getObject('QV-1-24','ZXDcvmh');
	app.getObject('QV-1-25','gbNFS');
	app.getObject('QV-1-26','VymrPP');
	app.getObject('QV-1-27','bGpawRP');
	
	app.getObject('QV-0-2','KZRq');
	app.getObject('T-4-4','JHCtq');
	app.getObject('T-4-3','MNELWCf');
	app.getObject('T-4-2','penppU');
	app.getObject('T-4-1','xPHYwn');
	app.getObject('T-1-o','JwpVVH');
	app.getObject('T-1-10','nDktb');
	app.getObject('T-1-11','zFXLAuw');
	app.getObject('T-4-5','nnssEe');
	app.getObject('T-4-6','CGgTFYb');
	app.getObject('T-1-13','xQHWzS');
	app.getObject('T-1-1','tXPhJN');
	app.getObject('T-1-7','PKGvez');
	app.getObject('T-1-8','nuxQp');
	app.getObject('T-1-2','jKpd');
	app.getObject('T-1-3','FLGdHT');
	app.getObject('T-1-4','YGKqxe');
	app.getObject('T-1-5','FjqJkDC');
	app.getObject('T-1-6','GzML');
	app.getObject('T-1-9','ynAYzkw');
	app.getObject('T-1-12','bvpm');
	app.getObject('T-1-14','mATt');
	app.getObject('T-1-15','hjPWBN');
	app.getObject('T-1-16','VXPCnru');
	app.getObject('T-1-17','sJaEsR');
	app.getObject('T-1-18','cpyFBKJ');
	app.getObject('T-1-19','zRmRNn');
	app.getObject('T-1-20','kjKjU');
	app.getObject('T-1-21','kxhHbk');
	app.getObject('T-1-22','cXGt');
	app.getObject('T-1-23','PgFPbcZ');
	app.getObject('T-1-24','YMvPTNa');
	app.getObject('T-1-25','dUUYRX');
	app.getObject('T-1-26','mJajPQ');
	app.getObject('T-1-27','ufVBpyk');
	app.getObject('F-4-4','ZUwtzW');
	app.getObject('F-4-3','PHujSjS');
	app.getObject('F-4-2','pMuPA');
	app.getObject('F-4-1','wKDcte');
	app.getObject('F-1-o','JwpVVH');
	app.getObject('F-1-10','PMPfF');
	app.getObject('F-1-11','XAKF');
	app.getObject('F-4-5','TfsntVm');
	app.getObject('F-4-6','TjPP');
	app.getObject('F-1-13','cjHJha');
	app.getObject('F-1-1','KWfMe');
	app.getObject('F-1-7','mBrvLr');
	app.getObject('F-1-8','NpsNdd');
	app.getObject('F-1-2','jBFnJDE');
	app.getObject('F-1-3','ZrPMju');
	app.getObject('F-1-4','txCXXPK');
	app.getObject('F-1-5','jMxZUP');
	app.getObject('F-1-6','aJBAWe');
	app.getObject('F-1-9','Nyuuu');
	app.getObject('F-1-12','kFjbSem');
	app.getObject('F-1-14','VSCjP');
	app.getObject('F-1-15','QCjsn');
	app.getObject('F-1-16','WpjdUq');
	app.getObject('F-1-17','KcVgm');
	app.getObject('F-1-18','PywKY');
	app.getObject('F-1-19','JBqdJh');
	app.getObject('F-1-20','NNAGDF');
	app.getObject('F-1-21','jfjDVBS');
	app.getObject('F-1-22','bzBfVy');
	app.getObject('F-1-23','aBjPEAt');
	app.getObject('F-1-24','hMyYuDr');
	app.getObject('F-1-25','UJnWdax');
	app.getObject('F-1-26','VyzrDN');
	app.getObject('F-1-27','LdcyLN');
	app.getObject('Filter1-viz','FFawQNk');
	app.getObject('Filter2-viz','ZCpmg');
	app.getObject('KPI1','KFjP');
	app.getObject('KPI2','aBdyjTg');
	app.getObject('KPI3','QmcgbCR');
	app.getObject('KPI4','kEpqf');
	app.getObject('KPI5','DBwwVp');
	app.getObject('KPI6','DmTry');
	app.getObject('KPI7','mCpuagb');
	app.getObject('KPI8','mjGjPd');
	app.getObject('Legend1','JJYyPr');

	app.bookmark.apply('223ffbae-9c6c-4a6c-b0c7-4b2f578c6d60');

	app.getObject('Filter1','xkCJPqq');
	app.getObject('Filter2','UUDmPwd');
	app.getObject('Filter1-2-viz','hZEcTFW');
	app.getObject('Filter2-2-viz','cjHmpJd');
	
	app.getObject('KP-4-4','edbb7881-82b4-4a9d-a31c-c7eebcfd1246');
	app.getObject('KP-4-3','ecd71c8e-124f-4576-b2bc-f24532077475');
	app.getObject('KP-4-2','43fcf375-11e2-4a4f-b231-4936ec032498');
	app.getObject('KP-4-1','edf31192-709e-4bac-9e50-08fd8d91ee42');
	app.getObject('KP-1-10','5846a0f2-3ce6-4478-b2d0-e612e7920fc4');
	app.getObject('KP-1-11','4c82475e-c781-41dc-98ca-64b74a2cf619');
	app.getObject('KP-4-5','27ee4b99-af8e-4891-9122-c60052f41485');
	app.getObject('KP-4-6','0b3f79b3-2334-4b82-8369-9b36d60cd930');
	app.getObject('KP-1-13','0f064843-0d7e-413d-bcec-d3cbc8d899fe');
	app.getObject('KP-1-1','45cc1e1a-26c9-4b31-8896-404b7e4696d4');
	app.getObject('KP-1-7','f8c4a1ed-111f-4ad8-930a-2a1afa5deb3e');
	app.getObject('KP-1-8','YkrtmUG');
	app.getObject('KP-1-2','09a40cea-a58d-474c-87bb-4bd86ebae9df');
	app.getObject('KP-1-3','81eb8bbc-95e6-493f-ba41-a0977cc66c51');
	app.getObject('KP-1-4','33658841-d2bd-4314-9478-7d23e244cf12');
	app.getObject('KP-1-5','9010d4cb-dd07-4ac4-9ce2-6e2ac2ba9ccc');
	app.getObject('KP-1-6','e5fd2cf3-adc5-4ff7-9151-2250224e86fb');
	app.getObject('KP-1-9','d78390b9-1ed4-4a54-80b9-31d9c323c2ca');
	app.getObject('KP-1-12','cb64b805-0f11-4e58-a23c-c18270f9be12');
	app.getObject('KP-1-14','6313b292-8514-4328-b88d-e164b44970d5');
	app.getObject('KP-1-15','d0c3cfc8-b73c-4621-b4d9-7554aed92848');
	app.getObject('KP-1-16','7b0a3db3-f8ed-46e6-aa89-263af70de6b2');
	app.getObject('KP-1-17','8157be2d-8742-49f1-ab8e-3cc64e8d2eed');
	app.getObject('KP-1-18','c8c1ebd8-3268-403d-b148-d8b0353974af');
	app.getObject('KP-1-19','d4ba6f94-7426-4e6b-9217-fe5ea531051f');
	app.getObject('KP-3-4','nWgVjWX');
	app.getObject('KP-1-20','2ade60fe-70f6-417d-865c-266bdafeded3');
	app.getObject('KP-1-21','4ff54ad9-dc66-4415-950a-cc1f1d241b8a');
	app.getObject('KP-1-22','2c2e4286-fa4d-4df9-b36e-3d3ca477130a');
	app.getObject('KP-1-23','717c5e47-82ab-4aec-aeee-abc5d3c9451f');
	app.getObject('KP-1-24','0179ed93-9989-42cd-9ece-d63b737ad01f');
	app.getObject('KP-1-25','56abe552-e237-4513-8bdb-cbd9e1aa6c59');
	app.getObject('Year','a2e17485-3ec1-4d71-9ecb-1a80399cfa19');
	app.getObject('Month','5db48a37-ee08-43fa-9621-ddee0f910a9a');
	app.getObject('T2-4-4','ab49dd6b-391d-456b-bd5b-b14e4464e61f');
	app.getObject('T2-4-3','783204d3-b56e-4efc-90a9-143305956cd7');
	app.getObject('T2-4-2','6045cac7-6c99-4cf9-884b-766be61e8506');
	app.getObject('T2-4-1','cdaf1353-4d31-4ce1-9cd3-e2c311b89feb');
	app.getObject('T2-1-o','JwpVVH');
	app.getObject('T2-1-10','f9c106e6-fe59-49d1-9bd1-2037381b463d');
	app.getObject('T2-1-11','599206e8-8f99-4c55-ac49-eac77f063782');
	app.getObject('T2-4-5','51ec9fc5-2c28-4519-b89a-a11156fcf297');
	app.getObject('T2-4-6','4965e612-f5b3-4af5-b49e-4a1ccca919fa');
	app.getObject('T2-1-13','768c567b-83a7-4309-8337-347057601c75');
	app.getObject('T2-1-1','3fe61b0c-ae84-4fe6-8bb5-4db690f3404a');
	app.getObject('T2-1-7','68acac0e-9636-497f-af01-bfbe83ae654c');
	app.getObject('T2-1-8','yruva');
	app.getObject('T2-1-2','ef6f7e40-6e9c-4507-9727-b7705e033676');
	app.getObject('T2-1-3','b28edbfb-f366-4a9b-9549-7d71d09e009c');
	app.getObject('T2-1-4','4537a006-11b9-4697-87df-a20a32940870');
	app.getObject('T2-1-5','d4cd3f7d-33ca-46e1-9712-265a55313911');
	app.getObject('T2-1-6','4dffc3ac-bb82-4180-824d-eb1191117e35');
	app.getObject('T2-1-9','f2a3d220-df40-4bc8-94bc-a2d7b9663860');
	app.getObject('T2-1-12','9852bcd6-70c9-40d4-a2a4-ee4bd161f16d');
	app.getObject('T2-1-14','91afd23f-6bde-40ac-8e50-4c361e2eb419');
	app.getObject('T2-1-15','37326972-3376-428a-aada-ef62177a967f');
	app.getObject('T2-1-16','cb98e3fd-50e5-407e-b369-56161b4b8938');
	app.getObject('T2-1-17','8f21e0e2-0047-4669-aef7-0734f7f9d9b4');
	app.getObject('T2-1-18','47b48e5e-0e55-4cb4-a7cd-4553ebde78d1');
	app.getObject('T2-1-19','c4a53e30-846c-43f2-a31a-c2eb3af616d8');
	app.getObject('T2-3-4','bchKp');
	app.getObject('T2-1-20','c8c3fe1e-8958-4a78-9863-7ad34db7c3b4');
	app.getObject('T2-1-21','8caec354-914b-4e2f-a7fc-194085c1a1d7');
	app.getObject('T2-1-22','a7f3f6df-bd22-4bb6-b72f-3caee9345c01');
	app.getObject('T2-1-23','bb780b0d-6f36-4a21-a911-6bbf70780622');
	app.getObject('T2-1-24','085e0f08-6181-4a6a-b767-9a53451d9e13');
	app.getObject('T2-1-25','44cffebd-20cd-4b19-8525-8ab7205c1c03');
	app.getObject('F2-4-4','ed98eca9-d471-4c21-a620-8b8484271ff4');
	app.getObject('F2-4-3','874fe3a3-ec80-4780-8ec6-216f186a5899');
	app.getObject('F2-4-2','21ab7fe2-d22e-4e12-80d2-573b71960614');
	app.getObject('F2-4-1','0a9450dc-a361-44a3-8586-9f727e6f4565');
	app.getObject('F2-1-o','JwpVVH');
	app.getObject('F2-1-10','e06c7715-eb93-47a9-a717-fb049ee2bacb');
	app.getObject('F2-1-11','e11a7ac0-1245-4dab-9ebc-9b81f2bd8c52');
	app.getObject('F2-4-5','f027d770-a07d-4a6c-9dd8-aff48f0d1be9');
	app.getObject('F2-4-6','08711067-6b1c-460a-9789-a3b9fbfcdd18');
	app.getObject('F2-1-13','30e6e951-69d9-4a34-a668-f42868b82bc4');
	app.getObject('F2-1-1','9677b058-454e-49d1-840c-443fd2b8e9ef');
	app.getObject('F2-1-7','09ab5b75-af05-4498-b1c8-b6d2050e3ad5');
	app.getObject('F2-1-8','ea6ab206-35d8-4d78-a5c5-636b45ba046e');
	app.getObject('F2-1-2','b832d47b-00a7-4d87-ac5c-cb23af4d71cf');
	app.getObject('F2-1-3','961e2581-bbce-4065-a74c-565340fdc446');
	app.getObject('F2-1-4','43143437-c765-4435-9e6e-aee2c06794a8');
	app.getObject('F2-1-5','ec19ef58-4643-41cd-9c6b-2f8905d5c2cc');
	app.getObject('F2-1-6','728f3888-6562-44a6-9324-d1d43c105efe');
	app.getObject('F2-1-9','5649f220-e9a3-4cdf-b868-d64eede16632');
	app.getObject('F2-1-12','3c376c7b-e119-4ce1-b3ad-9866d6db31ad');
	app.getObject('F2-1-14','116eae0b-ffa0-4ca3-9925-2d9e7080df65');
	app.getObject('F2-1-15','7cd73706-9b1d-440b-8197-8442912a7f6e');
	app.getObject('F2-1-16','3f7e161e-9705-4fb1-9e1d-31385d56f06e');
	app.getObject('F2-1-17','abb20bde-b8df-4cfe-88f6-5dee768cd108');
	app.getObject('F2-1-18','117def12-665d-4a58-8a6b-79823163a000');
	app.getObject('F2-1-19','13d55a52-20dd-49b5-968e-9f8422a3578c');
	app.getObject('F2-1-20','14eb25a2-e2af-441c-9898-0a1b91120c70');
	app.getObject('F2-1-21','68b2d1f6-fa29-4d5a-8db6-a494d9f2d2b6');
	app.getObject('F2-1-22','66f1eac2-fda6-4926-9ee4-ec085163f4f0');
	app.getObject('F2-1-23','327038ac-3b46-4f42-9f0c-3ed66c51308d');
	app.getObject('F2-1-24','949c0cc3-b7a6-417f-8d2d-ef313bfd1f88');
	app.getObject('F2-1-25','d98c48b9-c316-406a-b81c-f6e7737916bb');
	app.getObject('F2-1-26','565d9692-1253-4305-b7d3-d67fa4c59061');
	app.getObject('F2-1-27','c3af1dd1-70b0-4a30-9da2-3859a52799b4');
	app.getObject('P1-1','JGrtey');
	app.getObject('P2-1','nFKbB');
	app.getObject('P3-1','TUQDA');
	app.getObject('P4-1','YYzCwVS');
	app.getObject('P5-1','Yfeq');
	app.getObject('P6-1','gbHFjdm');
	app.getObject('P7-1','ZNZnr');
	app.getObject('P8-1','UhRmkeK');
	app.getObject('P9-1','kmWyeKS');
	app.getObject('P10-1','bTjJRg');
    app.getObject('C-1','ZgKVLp');
	
	app.getObject('C-3','SxKTra');
	app.getObject('C-4','UsFp');
	app.getObject('C-5','PCqaQ');
	app.getObject('C-6','SXJepy');
	app.getObject('C-7','YZfvm');
	app.getObject('C-8','PppMmg');
	app.getObject('C-9','NuHqSY');
	app.getObject('C-10','NK');
	app.getObject('C-11','VVMSJ');
	app.getObject('C-12','KmTmst');
	app.getObject('C-13','EzPKqdH');
	app.getObject('C-14','pPrpKN');
	app.getObject('C-15','dcWaCqj');
	app.getObject('C-16','GfgJKE');
	app.getObject('C-17','BPBeha');
	app.getObject('C-18','Mzeddr');
	app.getObject('C-19','jaRv');
	app.getObject('C-20','QEQsGs');
	app.getObject('C-21','GfVbDhp');
	app.getObject('C-22','GfVbDhp');
	app.getObject('C-23','cKtU');
	app.getObject('C-24','FGRpM');
	app.getObject('C-25','KgMYpV');
	app.getObject('C-26','sbmqRx');
	app.getObject('C-27','qjztsq');
	app.getObject('C-P-1','daHYJjf');
	app.getObject('C-P-2','MRjBrM');
	app.getObject('C-P-3','PgBVeya');
	app.getObject('C-P-4','yXjTDg');
	app.getObject('C-P-5','FpHDVma');
	app.getObject('C-P-6','ZeYxaz');
	app.getObject('C-P-7','zTjCsz');
	app.getObject('C-P-8','Qnhhp');
	app.getObject('C-P-9','YrmjyBn');
	app.getObject('C-P-10','XMaUz');
	
	app.getObject('G-1','Huhd');
	app.getObject('G-2','EJv');
	app.getObject('G-3','MWaEt');
	app.getObject('G-4','JAcAR');
	app.getObject('G-5','QVCBcmC');
	app.getObject('G-6','FJTJzF');
	app.getObject('G-7','fvmRcX');
	app.getObject('G-8','dJsPSZh');
	app.getObject('G-9','bSxgcK');
	app.getObject('G-10','fPRBBP');
	app.getObject('G-11','UKETDzP');
	app.getObject('G-12','eYmnJzP');
	app.getObject('G-13','HXu');
	app.getObject('G-14','qtfBWm');
	app.getObject('G-15','JRFvHX');
	app.getObject('G-16','ZxVJpSm');
	app.getObject('G-17','mzJBBs');
	app.getObject('G-18','kTjDmpk');
	app.getObject('G-19','XPbwHgm');
	app.getObject('G-20','MFDrj');
	app.getObject('G-21','mgT');
	app.getObject('G-22','zFdGd');
	app.getObject('G-23','JHGLJq');
	app.getObject('G-24','upPAPz');
	app.getObject('G-25','DzRqgt');
	app.getObject('G-2-1','HUWksph');
	app.getObject('G-2-2','qtPcC');
	app.getObject('G-2-3','KvJXF');
	app.getObject('G-2-4','RVDz');
	app.getObject('G-2-5','kVmeN');
	app.getObject('G-2-6','HFmaE');
	app.getObject('G-2-7','aKZ');
	app.getObject('G-2-8','qsGyBE');
	app.getObject('G-2-9','EnMHzW');
	app.getObject('G-2-10','eKXf');
	app.getObject('G-2-11','PYuWr');
	app.getObject('G-2-12','jPKJP');
	app.getObject('G-2-13','CmmbTY');
	app.getObject('G-2-14','sPjJseX');
	app.getObject('G-2-15','ZCUeCC');
	app.getObject('G-2-16','Sqsrwm');
	app.getObject('G-2-17','AnnptU');
	app.getObject('G-2-18','MJfQXaR');
	app.getObject('G-2-19','QybFEy');
	app.getObject('G-2-20','jmNMLJ');
	app.getObject('G-2-21','PQPPt');
	app.getObject('G-2-22','yWcAj');
	app.getObject('G-2-23','gAuFAWh');
	app.getObject('G-2-24','epaCcJ');
	app.getObject('G-2-25','nMQbAR');

	
	
	$("#theme").change(function () {
      qlik.resize();
    });
		
	$("#location").change(function () {
		qlik.resize();
	  });
	  $("a").click(function () {
		qlik.resize();
	  });
	$(".btn-round").click(function() {
			qlik.resize();
		});
		$(".PaperTitleItem").click(function() {
			qlik.resize();
		});
	
app.getObject('CurrentSelections','CurrentSelections');
		$(".filter-drawer-toggle, paper-menu paper-item").click(function() {
			qlik.resize();
		});

});
