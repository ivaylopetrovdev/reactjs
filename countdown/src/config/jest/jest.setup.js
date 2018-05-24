import React from 'react';
import fetchMock from 'fetch-mock';
import { mount } from 'enzyme';
// import Strings from '../../js/lang/en';
//
// // Patch the fetch() global to always return the same value for GET requests to all URLs.
// fetchMock.get( '*', ( url ) =>
// {
// 	// Remove the timestamp, as it's different every time
// 	if ( url.startsWith( 'https://maps.googleapis.com/maps/api/timezone/json?location=25.0992794469656,55.1561737060547&timestamp=' ) )
// 	{
// 		url = 'https://maps.googleapis.com/maps/api/timezone/json?location=25.0992794469656,55.1561737060547';
// 	}
// 	switch ( url )
// 	{
// 		case 'http://52.59.223.75:8080/my-community/me':
// 			return '{"username":"my@example.com"}';
// 		case 'https://maps.googleapis.com/maps/api/timezone/json?location=25.0992794469656,55.1561737060547':
// 			return '{"dstOffset":0,"rawOffset":14400,"status":"OK","timeZoneId":"Asia/Dubai","timeZoneName":"Gulf Standard Time"}';
// 		case '//api.openweathermap.org/data/2.5/forecast/daily?lat=25.0992794469656&lon=55.1561737060547&cnt=10&APPID=e4a8f2f19561fb42bda7c0655ed1ed8d&lang=en&units=metric&callback=test':
// 			return 'test({"city":{"id":292224,"name":"Dubayy","coord":{"lon":55.333328,"lat":25},"country":"AE","population":0},"cod":"200","message":0.0062,"cnt":10,"list":[{"dt":1476950400,"temp":{"day":31.73,"min":27.81,"max":31.73,"night":27.81,"eve":30.1,"morn":31.73},"pressure":1020.71,"humidity":78,"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"speed":4.85,"deg":286,"clouds":36},{"dt":1477036800,"temp":{"day":31.26,"min":26.44,"max":31.38,"night":27.08,"eve":29.48,"morn":26.44},"pressure":1021.82,"humidity":86,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"speed":2.97,"deg":251,"clouds":0},{"dt":1477123200,"temp":{"day":30.43,"min":25.13,"max":30.92,"night":26.72,"eve":29.03,"morn":25.13},"pressure":1023.41,"humidity":90,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"speed":1.87,"deg":223,"clouds":0},{"dt":1477209600,"temp":{"day":30.08,"min":25.38,"max":33.24,"night":27.09,"eve":33.24,"morn":25.38},"pressure":1019.3,"humidity":0,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"speed":3.6,"deg":185,"clouds":0},{"dt":1477296000,"temp":{"day":29.79,"min":25.2,"max":32.78,"night":27.53,"eve":32.78,"morn":25.2},"pressure":1018.06,"humidity":0,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"speed":3.66,"deg":185,"clouds":0},{"dt":1477382400,"temp":{"day":30.4,"min":25.73,"max":33.14,"night":28.03,"eve":33.14,"morn":25.73},"pressure":1018.82,"humidity":0,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"speed":2.04,"deg":200,"clouds":0},{"dt":1477468800,"temp":{"day":30.85,"min":25.88,"max":33.45,"night":28.97,"eve":33.45,"morn":25.88},"pressure":1022.67,"humidity":0,"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"speed":1.55,"deg":114,"clouds":13},{"dt":1477555200,"temp":{"day":31.31,"min":26.71,"max":33.42,"night":28.76,"eve":33.42,"morn":26.71},"pressure":1025.66,"humidity":0,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"speed":6.07,"deg":84,"clouds":0},{"dt":1477641600,"temp":{"day":30.95,"min":26.42,"max":33.26,"night":27.69,"eve":33.26,"morn":26.42},"pressure":1025.64,"humidity":0,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"speed":3.99,"deg":105,"clouds":0},{"dt":1477728000,"temp":{"day":30.12,"min":25.28,"max":32.49,"night":26.58,"eve":32.49,"morn":25.28},"pressure":1024.26,"humidity":0,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"speed":2.66,"deg":117,"clouds":0}]});';
// 		case 'http://ec2-52-59-240-151.eu-central-1.compute.amazonaws.com:8080/mycommunity/alldocuments/655/Lot%20Owner/100':
// 			return '[{"createdDateTime":1442275200000,"filename":"IBM_MOM_17_August_2015.pdf","filetype":"pdf","desc":"MOM - Interim Board Members Meeting 17 Aug 2015","createdby":"inallana","docurl":"http://appaws2.mystrata.com/cgi-bin/download.cgi?ID=15h%23%2B21%20%2B%2BT%29-%40-%2FCorrespondence%2FGeneral%2F-%40-IBM_MOM_17_August_2015.pdf-%40-%2Br*","bucket":"General"},{"createdDateTime":1439424000000,"filename":"al_bandar_2013_Financial_audit_report.pdf","filetype":"pdf","desc":"al bandar 2013 financial audit report","createdby":"inallana","docurl":"http://appaws2.mystrata.com/cgi-bin/download.cgi?ID=15h%23%2B21%20%2B%2BT%29-%40-%2FFinancials%2F-%40-al_bandar_2013_Financial_audit_report.pdf-%40-%2Br*","bucket":"Financial"},{"createdDateTime":1430352000000,"filename":"MOM__INTERIM_BOARD_MEMBER_MEETING-Al_Bandar_07_April_2015.pdf","filetype":"pdf","desc":"IBM MOM 07 APRIL 2015","createdby":"inallana","docurl":"http://appaws2.mystrata.com/cgi-bin/download.cgi?ID=15h%23%2B21%20%2B%2BT%29-%40-%2FCorrespondence%2FGeneral%2F-%40-MOM__INTERIM_BOARD_MEMBER_MEETING-Al_Bandar_07_April_2015.pdf-%40-%2Br*","bucket":"General"},{"createdDateTime":1418083200000,"filename":"MOM__AGA_MEETING_2014.pdf","filetype":"pdf","desc":"Minutes of Meeting AGA","createdby":"inallana","docurl":"http://appaws2.mystrata.com/cgi-bin/download.cgi?ID=15h%23%2B21%20%2B%2BT%29-%40-%2FCorrespondence%2FGeneral%2F-%40-MOM__AGA_MEETING_2014.pdf-%40-%2Br*","bucket":"General"},{"createdDateTime":1413763200000,"filename":"3rd_OG_Minutes_of_Meeting_-_2014.pdf","filetype":"pdf","desc":"3rd Interim Board Minutes of Meeting","createdby":"inallana","docurl":"http://appaws2.mystrata.com/cgi-bin/download.cgi?ID=15h%23%2B21%20%2B%2BT%29-%40-%2FCorrespondence%2FGeneral%2F-%40-3rd_OG_Minutes_of_Meeting_-_2014.pdf-%40-%2Br*","bucket":"General"},{"createdDateTime":1405296000000,"filename":"2nd_OG_Minutes_of_Meeting_-_2014.pdf","filetype":"pdf","desc":"2nd OG Minutes of meeting 2014","createdby":"inallana","docurl":"http://appaws2.mystrata.com/cgi-bin/download.cgi?ID=15h%23%2B21%20%2B%2BT%29-%40-%2FCorrespondence%2FGeneral%2F-%40-2nd_OG_Minutes_of_Meeting_-_2014.pdf-%40-%2Br*","bucket":"General"},{"createdDateTime":1401321600000,"filename":"1st_OG_Minutes_of_Meeting_-_2014.pdf","filetype":"pdf","desc":"1st OG Minutes of Meeting","createdby":"inallana","docurl":"http://appaws2.mystrata.com/cgi-bin/download.cgi?ID=15h%23%2B21%20%2B%2BT%29-%40-%2FCorrespondence%2FGeneral%2F-%40-1st_OG_Minutes_of_Meeting_-_2014.pdf-%40-%2Br*","bucket":"General"},{"createdDateTime":1394582400000,"filename":"Al_Bandar_2012_Financial_audit_report.pdf","filetype":"pdf","desc":"","createdby":"ksharygina","docurl":"http://appaws2.mystrata.com/cgi-bin/download.cgi?ID=15h%23%2B21%20%2B%2BT%29-%40-%2FFinancials%2F-%40-Al_Bandar_2012_Financial_audit_report.pdf-%40-%2Br*","bucket":"Financial"},{"createdDateTime":1393891200000,"filename":"Al_Bandar_Facade_Cleaning_Schedule_-_First_Quarter_2014.pdf","filetype":"pdf","desc":"facade cleaning schedule 2014","createdby":"inallana","docurl":"http://appaws2.mystrata.com/cgi-bin/download.cgi?ID=15h%23%2B21%20%2B%2BT%29-%40-%2FCorrespondence%2FGeneral%2F-%40-Al_Bandar_Facade_Cleaning_Schedule_-_First_Quarter_2014.pdf-%40-%2Br*","bucket":"General"},{"createdDateTime":1392163200000,"filename":"UpdatedTime_schedule_for_Elevator_Interior_Design_work_in_Al_bandar.pdf","filetype":"pdf","desc":"Lift maintenance schedule","createdby":"inallana","docurl":"http://appaws2.mystrata.com/cgi-bin/download.cgi?ID=15h%23%2B21%20%2B%2BT%29-%40-%2FCorrespondence%2FGeneral%2F-%40-UpdatedTime_schedule_for_Elevator_Interior_Design_work_in_Al_bandar.pdf-%40-%2Br*","bucket":"General"},{"createdDateTime":1389052800000,"filename":"Al_Bandar_Insurance_2014.pdf","filetype":"pdf","desc":"","createdby":"ksharygina","docurl":"http://appaws2.mystrata.com/cgi-bin/download.cgi?ID=15h%23%2B21%20%2B%2BT%29-%40-%2FInsurance%2F-%40-Al_Bandar_Insurance_2014.pdf-%40-%2Br*","bucket":"Community"},{"createdDateTime":1379894400000,"filename":"23_sept_2013_-_Survey_Tabulation_-_Satellite_Dish_Farm.pdf","filetype":"pdf","desc":"23-09-13 Summary tabulation","createdby":"inallana","docurl":"http://appaws2.mystrata.com/cgi-bin/download.cgi?ID=15h%23%2B21%20%2B%2BT%29-%40-%2FCorrespondence%2FGeneral%2F-%40-23_sept_2013_-_Survey_Tabulation_-_Satellite_Dish_Farm.pdf-%40-%2Br*","bucket":"General"},{"createdDateTime":1379548800000,"filename":"19_sept_2013_-_Survey_Tabulation_-_Satellite_Dish_Farm.pdf","filetype":"pdf","desc":"19 Sept survey tabulation","createdby":"inallana","docurl":"http://appaws2.mystrata.com/cgi-bin/download.cgi?ID=15h%23%2B21%20%2B%2BT%29-%40-%2FCorrespondence%2FGeneral%2F-%40-19_sept_2013_-_Survey_Tabulation_-_Satellite_Dish_Farm.pdf-%40-%2Br*","bucket":"General"},{"createdDateTime":1378944000000,"filename":"12_sept_2013_-_Survey_Tabulation_-_Satellite_Dish_Farm.pdf","filetype":"pdf","desc":"12/09/13 survey tabulation - satellite dish farm","createdby":"inallana","docurl":"http://appaws2.mystrata.com/cgi-bin/download.cgi?ID=15h%23%2B21%20%2B%2BT%29-%40-%2FCorrespondence%2FGeneral%2F-%40-12_sept_2013_-_Survey_Tabulation_-_Satellite_Dish_Farm.pdf-%40-%2Br*","bucket":"General"},{"createdDateTime":1378684800000,"filename":"Survey_Tabulation_-_Satellite_Dish_Farm.pdf","filetype":"pdf","desc":"","createdby":"inallana","docurl":"http://appaws2.mystrata.com/cgi-bin/download.cgi?ID=15h%23%2B21%20%2B%2BT%29-%40-%2FCorrespondence%2FGeneral%2F-%40-Survey_Tabulation_-_Satellite_Dish_Farm.pdf-%40-%2Br*","bucket":"General"},{"createdDateTime":1378598400000,"filename":"SATELLITE_FARM_SURVEY_-_QA.pdf","filetype":"pdf","desc":"Q & A Satellite Dish Farm Survey","createdby":"inallana","docurl":"http://appaws2.mystrata.com/cgi-bin/download.cgi?ID=15h%23%2B21%20%2B%2BT%29-%40-%2FCorrespondence%2FGeneral%2F-%40-SATELLITE_FARM_SURVEY_-_QA.pdf-%40-%2Br*","bucket":"General"},{"createdDateTime":1369612800000,"filename":"Community_Information_-_May_2013.docx","filetype":"docx","desc":"Community Information May 2013","createdby":"inallana","docurl":"http://appaws2.mystrata.com/cgi-bin/download.cgi?ID=15h%23%2B21%20%2B%2BT%29-%40-%2FCorrespondence%2FGeneral%2F-%40-Community_Information_-_May_2013.docx-%40-%2Br*","bucket":"General"},{"createdDateTime":1368576000000,"filename":"Al_Bandar_temporary_overflow_car_park.pdf","filetype":"pdf","desc":"cars on temp car park","createdby":"inallana","docurl":"http://appaws2.mystrata.com/cgi-bin/download.cgi?ID=15h%23%2B21%20%2B%2BT%29-%40-%2FCorrespondence%2FGeneral%2F-%40-Al_Bandar_temporary_overflow_car_park.pdf-%40-%2Br*","bucket":"General"},{"createdDateTime":1367452800000,"filename":"New_OG_Member.pdf","filetype":"pdf","desc":"New OG Member","createdby":"inallana","docurl":"http://appaws2.mystrata.com/cgi-bin/download.cgi?ID=15h%23%2B21%20%2B%2BT%29-%40-%2FCorrespondence%2FGeneral%2F-%40-New_OG_Member.pdf-%40-%2Br*","bucket":"General"},{"createdDateTime":1365897600000,"filename":"OG_Member_Election.doc","filetype":"doc","desc":"OG Member Election","createdby":"inallana","docurl":"http://appaws2.mystrata.com/cgi-bin/download.cgi?ID=15h%23%2B21%20%2B%2BT%29-%40-%2FCorrespondence%2FGeneral%2F-%40-OG_Member_Election.doc-%40-%2Br*","bucket":"General"},{"createdDateTime":1359331200000,"filename":"Community_Information_-_Jan_2013.docx","filetype":"docx","desc":"Community Information - January 2013","createdby":"ftan","docurl":"http://appaws2.mystrata.com/cgi-bin/download.cgi?ID=15h%23%2B21%20%2B%2BT%29-%40-%2FCorrespondence%2FGeneral%2F-%40-Community_Information_-_Jan_2013.docx-%40-%2Br*","bucket":"General"},{"createdDateTime":1359331200000,"filename":"Nomination_to_Owners_Group_Letter.pdf","filetype":"pdf","desc":"Nomination to Owners Group Letter","createdby":"ftan","docurl":"http://appaws2.mystrata.com/cgi-bin/download.cgi?ID=15h%23%2B21%20%2B%2BT%29-%40-%2FCorrespondence%2FBoard%2F-%40-Nomination_to_Owners_Group_Letter.pdf-%40-%2Br*","bucket":"General"},{"createdDateTime":1358380800000,"filename":"Community_Newsletter_(Issue_6)_EN.pdf","filetype":"pdf","desc":"Community Newsletter Issue 6 (Eng)","createdby":"ftan","docurl":"http://appaws2.mystrata.com/cgi-bin/download.cgi?ID=15h%23%2B21%20%2B%2BT%29-%40-%2FCorrespondence%2FGeneral%2F-%40-Community_Newsletter_%28Issue_6%29_EN.pdf-%40-%2Br*","bucket":"General"},{"createdDateTime":1358380800000,"filename":"Community_Newsletter_(Issue_6)_AR.pdf","filetype":"pdf","desc":"Community Newsletter Issue 6 (Arab)","createdby":"ftan","docurl":"http://appaws2.mystrata.com/cgi-bin/download.cgi?ID=15h%23%2B21%20%2B%2BT%29-%40-%2FCorrespondence%2FGeneral%2F-%40-Community_Newsletter_%28Issue_6%29_AR.pdf-%40-%2Br*","bucket":"General"},{"createdDateTime":1357084800000,"filename":"Bodytree_flyer_(020113).pdf","filetype":"pdf","desc":"Bodytree flyer","createdby":"ftan","docurl":"http://appaws2.mystrata.com/cgi-bin/download.cgi?ID=15h%23%2B21%20%2B%2BT%29-%40-%2FCorrespondence%2FGeneral%2F-%40-Bodytree_flyer_%28020113%29.pdf-%40-%2Br*","bucket":"General"},{"createdDateTime":1356134400000,"filename":"1st_AGM_Minutes_18_Nov_2012_docx.docx","filetype":"docx","desc":"1st AGM Minutes","createdby":"ftan","docurl":"http://appaws2.mystrata.com/cgi-bin/download.cgi?ID=15h%23%2B21%20%2B%2BT%29-%40-%2FMeetings%2FGeneral%20Meetings%2FFirst%20Annual%20General%20Assembly%2FMinutes%2F-%40-1st_AGM_Minutes_18_Nov_2012_docx.docx-%40-%2Br*","bucket":"Meetings"},{"createdDateTime":1356134400000,"filename":"Property_management_services.docx","filetype":"docx","desc":"Property Management Services","createdby":"ftan","docurl":"http://appaws2.mystrata.com/cgi-bin/download.cgi?ID=15h%23%2B21%20%2B%2BT%29-%40-%2FCorrespondence%2FGeneral%2F-%40-Property_management_services.docx-%40-%2Br*","bucket":"General"},{"createdDateTime":1355875200000,"filename":"Skylite_Louboutin_Ad_Final_10DEC2012_copy.pdf","filetype":"pdf","desc":"Skylite Louboutin","createdby":"ftan","docurl":"http://appaws2.mystrata.com/cgi-bin/download.cgi?ID=15h%23%2B21%20%2B%2BT%29-%40-%2FCorrespondence%2FGeneral%2F-%40-Skylite_Louboutin_Ad_Final_10DEC2012_copy.pdf-%40-%2Br*","bucket":"General"},{"createdDateTime":1355875200000,"filename":"Voucher345++.pdf","filetype":"pdf","desc":"Voucher 345","createdby":"ftan","docurl":"http://appaws2.mystrata.com/cgi-bin/download.cgi?ID=15h%23%2B21%20%2B%2BT%29-%40-%2FCorrespondence%2FGeneral%2F-%40-Voucher345%2B%2B.pdf-%40-%2Br*","bucket":"General"},{"createdDateTime":1355788800000,"filename":"AlBandar_flyer1A.jpg","filetype":"jpg","desc":"Ornina discount for Al Bandar residents","createdby":"ftan","docurl":"http://appaws2.mystrata.com/cgi-bin/download.cgi?ID=15h%23%2B21%20%2B%2BT%29-%40-%2FCorrespondence%2FGeneral%2F-%40-AlBandar_flyer1A.jpg-%40-%2Br*","bucket":"General"},{"createdDateTime":1354147200000,"filename":"Skylite.pdf","filetype":"pdf","desc":"Rush Bar Special for residents of Al Bandar","createdby":"ftan","docurl":"http://appaws2.mystrata.com/cgi-bin/download.cgi?ID=15h%23%2B21%20%2B%2BT%29-%40-%2FCorrespondence%2FGeneral%2F-%40-Skylite.pdf-%40-%2Br*","bucket":"General"},{"createdDateTime":1354060800000,"filename":"al_dar_residents_offer.doc","filetype":"doc","desc":"Aldar residents offer - A magical Christmas experience","createdby":"ftan","docurl":"http://appaws2.mystrata.com/cgi-bin/download.cgi?ID=15h%23%2B21%20%2B%2BT%29-%40-%2FCorrespondence%2FGeneral%2F-%40-al_dar_residents_offer.doc-%40-%2Br*","bucket":"General"},{"createdDateTime":1352332800000,"filename":"Marina_Fun.jpg","filetype":"jpg","desc":"Marina Fun Day","createdby":"ftan","docurl":"http://appaws2.mystrata.com/cgi-bin/download.cgi?ID=15h%23%2B21%20%2B%2BT%29-%40-%2FCorrespondence%2FGeneral%2F-%40-Marina_Fun.jpg-%40-%2Br*","bucket":"General"},{"createdDateTime":1352246400000,"filename":"Fines_Policy_Announcement_Community_Information_-_November_2012_docx.docx","filetype":"docx","desc":"Fines - Policy Announcement","createdby":"ftan","docurl":"http://appaws2.mystrata.com/cgi-bin/download.cgi?ID=15h%23%2B21%20%2B%2BT%29-%40-%2FCorrespondence%2FGeneral%2F-%40-Fines_Policy_Announcement_Community_Information_-_November_2012_docx.docx-%40-%2Br*","bucket":"General"},{"createdDateTime":1351728000000,"filename":"Bandar_Retailers_Contacts__Opening_Timings.pdf","filetype":"pdf","desc":"Al Bandar Retailers Contacts & Opening hours","createdby":"ftan","docurl":"http://appaws2.mystrata.com/cgi-bin/download.cgi?ID=15h%23%2B21%20%2B%2BT%29-%40-%2FCorrespondence%2FGeneral%2F-%40-Bandar_Retailers_Contacts__Opening_Timings.pdf-%40-%2Br*","bucket":"General"},{"createdDateTime":1350950400000,"filename":"INVITATION_LETTER_FOR_FIRST_AGM_FINAL_LETTER_22_10_2012.docx","filetype":"docx","desc":"Invitation Letter for First AGM","createdby":"ftan","docurl":"http://appaws2.mystrata.com/cgi-bin/download.cgi?ID=15h%23%2B21%20%2B%2BT%29-%40-%2FMeetings%2FGeneral%20Meetings%2FFirst%20Annual%20General%20Assembly%2FNotices%2F-%40-INVITATION_LETTER_FOR_FIRST_AGM_FINAL_LETTER_22_10_2012.docx-%40-%2Br*","bucket":"Meetings"},{"createdDateTime":1350864000000,"filename":"Community_Newsletter_Issue5_2012.pdf","filetype":"pdf","desc":"Community Newsletter Issue 5","createdby":"ftan","docurl":"http://appaws2.mystrata.com/cgi-bin/download.cgi?ID=15h%23%2B21%20%2B%2BT%29-%40-%2FCorrespondence%2FGeneral%2F-%40-Community_Newsletter_Issue5_2012.pdf-%40-%2Br*","bucket":"General"},{"createdDateTime":1348617600000,"filename":"Al_Bandar_Marina_-_Personal_Water_Craft_-_Jet_Ski_Registration.pdf","filetype":"pdf","desc":"Al Bandar Marina - Personal Water Craft/Jet Ski Berth","createdby":"ftan","docurl":"http://appaws2.mystrata.com/cgi-bin/download.cgi?ID=15h%23%2B21%20%2B%2BT%29-%40-%2FCorrespondence%2FGeneral%2F-%40-Al_Bandar_Marina_-_Personal_Water_Craft_-_Jet_Ski_Registration.pdf-%40-%2Br*","bucket":"General"},{"createdDateTime":1348617600000,"filename":"Community_Information_-_Sep_2012.pdf","filetype":"pdf","desc":"Community Information - Sep 2012","createdby":"ftan","docurl":"http://appaws2.mystrata.com/cgi-bin/download.cgi?ID=15h%23%2B21%20%2B%2BT%29-%40-%2FCorrespondence%2FGeneral%2F-%40-Community_Information_-_Sep_2012.pdf-%40-%2Br*","bucket":"General"},{"createdDateTime":1348617600000,"filename":"Annoucement_-_New_Portal.pdf","filetype":"pdf","desc":"New Portal Announcement","createdby":"ftan","docurl":"http://appaws2.mystrata.com/cgi-bin/download.cgi?ID=15h%23%2B21%20%2B%2BT%29-%40-%2FCorrespondence%2FGeneral%2F-%40-Annoucement_-_New_Portal.pdf-%40-%2Br*","bucket":"General"},{"createdDateTime":1338422400000,"filename":"Drop_Off_Notice_-_May_2012.pdf","filetype":"pdf","desc":"Drop off notice","createdby":"ftan","docurl":"http://appaws2.mystrata.com/cgi-bin/download.cgi?ID=15h%23%2B21%20%2B%2BT%29-%40-%2FCorrespondence%2FGeneral%2F-%40-Drop_Off_Notice_-_May_2012.pdf-%40-%2Br*","bucket":"General"},{"createdDateTime":1337644800000,"filename":"Community_Newsletter_Issue3_2012.pdf","filetype":"pdf","desc":"Community Newsletter Issue No 3","createdby":"ftan","docurl":"http://appaws2.mystrata.com/cgi-bin/download.cgi?ID=15h%23%2B21%20%2B%2BT%29-%40-%2FCorrespondence%2FGeneral%2F-%40-Community_Newsletter_Issue3_2012.pdf-%40-%2Br*","bucket":"General"},{"createdDateTime":1337472000000,"filename":"First_OG_MOM_(Strata_posting).pdf","filetype":"pdf","desc":"First OG Minutes of Meeting","createdby":"ftan","docurl":"http://appaws2.mystrata.com/cgi-bin/download.cgi?ID=15h%23%2B21%20%2B%2BT%29-%40-%2FMeetings%2FBoard%20Meetings%2FBoard%20Meeting%2FMinutes%2F2012%2F-%40-First_OG_MOM_%28Strata_posting%29.pdf-%40-%2Br*","bucket":"Meetings"},{"createdDateTime":1337472000000,"filename":"Second_OG_MOM_(Strata_posting).pdf","filetype":"pdf","desc":"Second OG Minutes of Meeting","createdby":"ftan","docurl":"http://appaws2.mystrata.com/cgi-bin/download.cgi?ID=15h%23%2B21%20%2B%2BT%29-%40-%2FMeetings%2FBoard%20Meetings%2FBoard%20Meeting%2FMinutes%2F2012%2F-%40-Second_OG_MOM_%28Strata_posting%29.pdf-%40-%2Br*","bucket":"Meetings"}]';
// 		case 'http://ec2-52-59-240-151.eu-central-1.compute.amazonaws.com:8080/mycommunity/basicunitdetails/655/22/Lot%20Owner':
// 			return '{"unitNumber":null,"name":null,"email":null,"phone":null,"scBalance":"0.00 CR","scduedt":"","paymentSystemType":"","scpredt":"","scduepath":"","scprepath":""}';
// 		case 'http://ec2-52-59-240-151.eu-central-1.compute.amazonaws.com:8080/mycommunity/managerdetails/7535':
// 			return '{"name":"Strata Title Management","phone":"(02) 9266 2600","www":"www.stratatitle.com.au","slogon":"","logo":"","fax":"(02) 9266 2699","address":"Level 3, 385 Little Lonsdale St","location":"SYDNEY  NSW","postcode":"3000","email":"central@stratatitle.com.au"}';
// 		case 'http://52.59.223.75:8080/me?client_id=MyCommunity':
// 			return '{"username":"my@example.com"}';
// 		default:
// 			console.log( '\x1b[33m%s\x1b[0m: ', 'Fetch URL mock not handled: ', url );
// 			return '{}';
// 	}
// } );
//
// let localStorageMock = (function ()
// {
// 	let store = {};
// 	return {
// 		getItem: function ( key )
// 		{
// 			return store[ key ];
// 		},
// 		setItem: function ( key, value )
// 		{
// 			store[ key ] = value.toString();
// 		},
// 		clear  : function ()
// 		{
// 			store = {};
// 		}
// 	};
// })();
// Object.defineProperty( window, 'localStorage', { value: localStorageMock } );
//
// // Change default URL and enable JS to change it (JSDOM has it disabled by default)
// Object.defineProperty( window.location, 'href', {
// 	writable: true,
// 	value   : 'http://localhost:8080/'
// } );
//
// // Change default URL and enable JS to change it (JSDOM has it disabled by default)
// Object.defineProperty( window.location, 'pathname', {
// 	writable: true,
// 	value   : ''
// } );
//
// // Change default origin
// Object.defineProperty( window.location, 'origin', {
// 	writable: true,
// 	value   : 'http://localhost:8080'
// } );
//
// // Fix required by Slick slider (and probably others)
// window.matchMedia = window.matchMedia || function ()
// 	{
// 		return {
// 			matches       : false,
// 			addListener   : function ()
// 			{
// 			},
// 			removeListener: function ()
// 			{
// 			}
// 		};
// 	};
//
// // Set default URL for components
// window.baseFetchUrl = 'http://ec2-52-59-240-151.eu-central-1.compute.amazonaws.com:8080';
//
// /**
//  * Return promise that will wait for a property in the state to appear before resolving. Mounted instance of the passed
//  * Constructor is sent to the resolve.
//  * @param {Function} Component Constructor for React Component
//  * @param {Object} [options] Additional options (see list).
//  * @param {String} [options.stateKey] Key The name of the user.
//  * @param {String} [options.find] Component from which to get the state.
//  * @param {Boolean} [options.hoc] If true, instance will be threaded as HoC and state will be gotten from the wrapped
//  *     instance.
//  * @param {Object} [options.props] Props for the mounting component
//  * @returns {Promise}
//  */
// global.waitForData = function ( Component, options = {} )
// {
// 	return new Promise( ( resolve )=>
// 	{
// 		let props       = options.props || {};
// 		const component = mount(
// 			<Component {...props}/>
// 		);
//
// 		let waitForInterval = setInterval( ()=>
// 		{
// 			component.update();
//
// 			let stateKey = options.stateKey || 'data';
//
// 			// Wait for the proper key in the state for the proper component to appear
// 			if (
// 				( options.hoc && component.instance().getWrappedInstance().state[ stateKey ]) ||
// 				( options.find && component.find( options.find ).get( 0 ).state[ stateKey ] ) ||
// 				( !options.hoc && !options.find && component.state( stateKey ) ) )
// 			{
// 				// Stop looping
// 				clearInterval( waitForInterval );
//
// 				// Return mounted component
// 				resolve( component );
// 			}
// 		}, 100 );
// 	} );
// };

// global.Strings = Strings;
