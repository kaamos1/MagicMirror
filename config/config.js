/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "de",
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
			     // local for armv6l processors, default 
			     //   starts serveronly and then starts chrome browser
			     // false, default for all  NON-armv6l devices
			     // true, force serveronly mode, because you want to.. no UI on this device
	
	modules: [
//		{
//			module: "alert",
//		},
//		{
//			module: "updatenotification",
//			position: "top_bar"
//		},
		{
			module: 'MMM-pages',
			config: {
				modules:
					[[],[ "MMM-vvsDeparture", "MMM-NowPlayingOnSpotify", "weatherforecast", "calendar", "newsfeed"]],
					fixed: ["clock", "currentweather", "MMM-AlexaControl", "MMM-page-indicator"],
				}
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: 'MMM-vvsDeparture',
			position: 'top_left',
			config: {
					station_id: "de:08118:1910",
					offset: 8,
//					direction: "Bietigheim-Bissingen"
					direction: ["Stuttgart Hauptbahnhof (oben)", "Bietigheim-Bissingen"]
				}
		},
//		{
//			module: "compliments",
//			position: "lower_third"
//		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Bietigheim",
				locationID: "2949014",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "6d75350101614c87751d5c6e4ad91c03"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Bietigheim",
				locationID: "2949014",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "6d75350101614c87751d5c6e4ad91c03",
				maxNumberOfDays: 5,
				lang: "de"
			}
		},
		{
			module: "calendar",
			header: "T+L",
			position: "bottom_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/t7u589kkqagjnj4qvahpek1hp8%40group.calendar.google.com/private-7661664fd456c796f08324e26f4fef6a/basic.ics"					}				]
			}
		},
		{
		  module: "MMM-NowPlayingOnSpotify",
		  position: "bottom_right",
		  config: {
			showCoverArt: false,
			clientID: "b097fd723cc44e65beda9cdf30f77e63",
			clientSecret: "852264fae3024b74ab8c5dc19a1742d2",
			accessToken: "BQB_e6mdTc2kMmfJAw-7FbSz1pDMaSn0KN-jwLlHecFOGXvOKBoESLA1zHo4Cbwpd_0EJAMwgvY7Opq-ExkiznJmy4eu-sDh7aIfGMIAqqy1W-ly5p6saWuUdt2_oD44d3NIwnFj4MCSLerQJi8bWi7arQ",
			refreshToken: "AQBNsVFuKHweL98zf7Biai8ThMpKsFq0mRUCyerXCJJfNRxWkSeOMZguZc7IG5aRHwFPTj6Qhbtyf74kGqk2RnfN-ZaUoFVDZWKPFPUI2seZ_4qqOhX7kXMdkXsvCzxfmgQ"
		  }
		},
		{
			module: 'MMM-AlexaControl',
			position: 'bottom_right',
			config: {
				image: true,
				height: 100,
				width: 100,
				pm2ProcessName: "mm",
				vcgencmd: true,
				pages: 2,
				}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "Spiegel Online",
						url: "https://www.spiegel.de/schlagzeilen/tops/index.rss"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
			module: "MMM-page-indicator",
			position: "bottom_bar",
			config: {
					pages: 2,
				}
		}
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
