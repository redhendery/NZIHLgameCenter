export default function() {
  this.namespace = '/api';

  let schedules = [{
        type: "schedules",
        id: "Game 01",
        attributes: {
          away: "Canterbury Red Devils",
          date: "Friday, May 26th, 6:50pm",
          home: "Skycity Stampede",
          "league-game": "Game 1",
          venue: "Queenstown Ice Arena",
          "home-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/stampede.png?alt=media&token=0729a81d-eccf-426a-99c6-72cac19d31eb",
          "away-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/devils.png?alt=media&token=22485eeb-bfcb-4d44-bfd3-7f8452353fa9"
        }
      }, {
          type: "schedules",
          id: "Game 02",
          attributes: {
      			away: "Canterbury Red Devils",
      			date: "Saturday, May 27th, 6:50pm",
      			home: "Skycity Stampede",
      			"league-game": "Game 2",
      			venue: "Queenstown Ice Arena",
      			"home-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/stampede.png?alt=media&token=0729a81d-eccf-426a-99c6-72cac19d31eb",
      			"away-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/devils.png?alt=media&token=22485eeb-bfcb-4d44-bfd3-7f8452353fa9"
          }
        }, {
          type: "schedules",
          id: "Game 03",
          attributes: {
      			away: "Botany Swarm",
      			date: "Saturday, May 27th, 4:30pm",
      			home: "West Auckland Admirals",
      			"league-game": "Game 3",
      			venue: "Paradice Avondale",
      			"home-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/admirals.png?alt=media&token=4effc8b6-fffa-4d57-8159-2ba45e630a60",
      			"away-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/swarm.png?alt=media&token=6b9f1231-5837-4dde-9c31-8db2fedb96b8"
          }
        }, {
          type: "schedules",
          id: "Game 04",
          attributes: {
      			away: "Botany Swarm",
      			date: "Sunday, May 28th, 4:30pm",
      			home: "West Auckland Admirals",
      			"league-game": "Game 4",
      			venue: "Paradice Avondale",
      			"home-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/admirals.png?alt=media&token=4effc8b6-fffa-4d57-8159-2ba45e630a60",
      			"away-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/swarm.png?alt=media&token=6b9f1231-5837-4dde-9c31-8db2fedb96b8"
      		}
        }, {
          type: "schedules",
          id: "Game 05",
          attributes: {
      			away: "West Auckland Admirals",
      			date: "Saturday, June 10th, 4:30pm",
      			home: "Dunedin Thunder",
      			"league-game": "Game 5",
      			venue: "Dunedin Ice Stadium",
      			"home-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/thunder.png?alt=media&token=26099ca7-f9fe-42f4-811f-e9e95abb4729",
      			"away-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/admirals.png?alt=media&token=4effc8b6-fffa-4d57-8159-2ba45e630a60"
      		}
      }, {
        type: "schedules",
        id: "Game 06",
        attributes: {
    			away: "West Auckland Admirals",
    			date: "Saturday, June 11th, 4:30pm",
    			home: "Dunedin Thunder",
    			"league-game": "Game 6",
    			venue: "Dunedin Ice Stadium",
    			"home-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/thunder.png?alt=media&token=26099ca7-f9fe-42f4-811f-e9e95abb4729",
    			"away-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/admirals.png?alt=media&token=4effc8b6-fffa-4d57-8159-2ba45e630a60"
    		}
      }, {
        type: "schedules",
        id: "Game 07",
        attributes: {
    			away: "Canterbury Red Devils",
    			date: "Saturday, June 10th, 4:45pm",
    			home: "Botany Swarm",
    			"league-game": "Game 7",
    			venue: "Paradice Botany",
    			"home-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/swarm.png?alt=media&token=6b9f1231-5837-4dde-9c31-8db2fedb96b8",
    			"away-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/devils.png?alt=media&token=22485eeb-bfcb-4d44-bfd3-7f8452353fa9"
    		}
      }, {
        type: "schedules",
        id: "Game 08",
        attributes: {
    			away: "Canterbury Red Devils",
    			date: "Sunday, June 11th, 4:45pm",
    			home: "Botany Swarm",
    			"league-game": "Game 8",
    			venue: "Paradice Botany",
    			"home-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/swarm.png?alt=media&token=6b9f1231-5837-4dde-9c31-8db2fedb96b8",
    			"away-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/devils.png?alt=media&token=22485eeb-bfcb-4d44-bfd3-7f8452353fa9"
    		}
      }, {
        type: "schedules",
        id: "Game 09",
        attributes: {
    			away: "Skycity Stampede",
    			date: "Saturday, June 17th, 4:40pm",
    			home: "Dunedin Thunder",
    			"league-game": "Game 9",
    			venue: "Dunedin Ice Stadium",
    			"home-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/thunder.png?alt=media&token=26099ca7-f9fe-42f4-811f-e9e95abb4729",
    			"away-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/stampede.png?alt=media&token=0729a81d-eccf-426a-99c6-72cac19d31eb"
    		}
      }, {
        type: "schedules",
        id: "Game 10",
        attributes: {
    			away: "Skycity Stampede",
    			date: "Sunday, June 18th, 4:40pm",
    			home: "Dunedin Thunder",
    			"league-game": "Game 10",
    			venue: "Dunedin Ice Stadium",
    			"home-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/thunder.png?alt=media&token=26099ca7-f9fe-42f4-811f-e9e95abb4729",
    			"away-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/stampede.png?alt=media&token=0729a81d-eccf-426a-99c6-72cac19d31eb"
    		}
      }, {
        type: "schedules",
        id: "Game 11",
        attributes: {
    			away: "Canterbury Red Devils",
    			date: "Saturday, June 17th, 4:30pm",
    			home: "West Auckland Admirals",
    			"league-game": "Game 11",
    			venue: "Paradice Avondale",
    			"home-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/admirals.png?alt=media&token=4effc8b6-fffa-4d57-8159-2ba45e630a60",
    			"away-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/devils.png?alt=media&token=22485eeb-bfcb-4d44-bfd3-7f8452353fa9"
    		}
      }, {
        type: "schedules",
        id: "Game 12",
        attributes: {
    			away: "Canterbury Red Devils",
    			date: "Sunday, June 18th, 4:30pm",
    			home: "West Auckland Admirals",
    			"league-game": "Game 12",
    			venue: "Paradice Avondale",
    			"home-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/admirals.png?alt=media&token=4effc8b6-fffa-4d57-8159-2ba45e630a60",
    			"away-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/devils.png?alt=media&token=22485eeb-bfcb-4d44-bfd3-7f8452353fa9"
    		}
      }, {
        type: "schedules",
        id: "Game 13",
        attributes: {
    			away: "Botany Swarm",
    			date: "Friday, June 23rd, 7:40pm",
    			home: "Skycity Stampede",
    			"league-game": "Game 13",
    			venue: "Queenstown Ice Arena",
    			"home-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/stampede.png?alt=media&token=0729a81d-eccf-426a-99c6-72cac19d31eb",
    			"away-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/swarm.png?alt=media&token=6b9f1231-5837-4dde-9c31-8db2fedb96b8"
    		}
      }, {
        type: "schedules",
        id: "Game 14",
        attributes: {
    			away: "Botany Swarm",
    			date: "Saturday, June 24th, 6:50pm",
    			home: "Skycity Stampede",
    			"league-game": "Game 14",
    			venue: "Queenstown Ice Arena",
    			"home-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/stampede.png?alt=media&token=0729a81d-eccf-426a-99c6-72cac19d31eb",
    			"away-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/swarm.png?alt=media&token=6b9f1231-5837-4dde-9c31-8db2fedb96b8"
    		}
      }, {
        type: "schedules",
        id: "Game 15",
        attributes: {
    			away: "Dunedin Thunder",
    			date: "Saturday, June 24th, 4:45pm",
    			home: "Canterbury Red Devils",
    			"league-game": "Game 15",
    			venue: "Christchurch Alpine Ice",
    			"home-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/devils.png?alt=media&token=22485eeb-bfcb-4d44-bfd3-7f8452353fa9",
    			"away-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/thunder.png?alt=media&token=26099ca7-f9fe-42f4-811f-e9e95abb4729"
    		}
      }, {
        type: "schedules",
        id: "Game 16",
        attributes: {
    			away: "Dunedin Thunder",
    			date: "Sunday, June 25th, 4:45pm",
    			home: "Canterbury Red Devils",
    			"league-game": "Game 16",
    			venue: "Christchurch Alpine Ice",
    			"home-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/devils.png?alt=media&token=22485eeb-bfcb-4d44-bfd3-7f8452353fa9",
    			"away-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/thunder.png?alt=media&token=26099ca7-f9fe-42f4-811f-e9e95abb4729"
    		}
      }, {
        type: "schedules",
        id: "Game 17",
        attributes: {
    			away: "Skycity Stampede",
    			date: "Saturday, July 1st, 4:30pm",
    			home: "West Auckland Admirals",
    			"league-game": "Game 17",
    			venue: "Paradice Avondale",
    			"home-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/admirals.png?alt=media&token=4effc8b6-fffa-4d57-8159-2ba45e630a60",
    			"away-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/stampede.png?alt=media&token=0729a81d-eccf-426a-99c6-72cac19d31eb"
    		}
      }, {
        type: "schedules",
        id: "Game 18",
        attributes: {
    			away: "Skycity Stampede",
    			date: "Sunday, July 2nd, 4:30pm",
    			home: "West Auckland Admirals",
    			"league-game": "Game 18",
    			venue: "Paradice Avondale",
    			"home-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/admirals.png?alt=media&token=4effc8b6-fffa-4d57-8159-2ba45e630a60",
    			"away-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/stampede.png?alt=media&token=0729a81d-eccf-426a-99c6-72cac19d31eb"
    		}
      }, {
        type: "schedules",
        id: "Game 19",
        attributes: {
    			away: "Botany Swarm",
    			date: "Saturday, July 1st, 4:30pm",
    			home: "Dunedin Thunder",
    			"league-game": "Game 19",
    			venue: "Dunedin Ice Stadium",
    			"home-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/thunder.png?alt=media&token=26099ca7-f9fe-42f4-811f-e9e95abb4729",
    			"away-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/swarm.png?alt=media&token=6b9f1231-5837-4dde-9c31-8db2fedb96b8"
    		}
      }, {
        type: "schedules",
        id: "Game 20",
        attributes: {
    			away: "Botany Swarm",
    			date: "Sunday, July 2nd, 4:30pm",
    			home: "Dunedin Thunder",
    			"league-game": "Game 20",
    			venue: "Dunedin Ice Stadium",
    			"home-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/thunder.png?alt=media&token=26099ca7-f9fe-42f4-811f-e9e95abb4729",
    			"away-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/swarm.png?alt=media&token=6b9f1231-5837-4dde-9c31-8db2fedb96b8"
    		}
      }, {
        type: "schedules",
        id: "Game 21",
        attributes: {
    			away: "Dunedin Thunder",
    			date: "Friday, July 7th, 6:50pm",
    			home: "Skycity Stampede",
    			"league-game": "Game 21",
    			venue: "Queenstown Ice Arena",
    			"home-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/stampede.png?alt=media&token=0729a81d-eccf-426a-99c6-72cac19d31eb",
    			"away-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/thunder.png?alt=media&token=26099ca7-f9fe-42f4-811f-e9e95abb4729"
    		}
      }, {
        type: "schedules",
        id: "Game 22",
        attributes: {
    			away: "Dunedin Thunder",
    			date: "Saturday, July 8th, 6:50pm",
    			home: "Skycity Stampede",
    			"league-game": "Game 22",
    			venue: "Queenstown Ice Arena",
    			"home-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/stampede.png?alt=media&token=0729a81d-eccf-426a-99c6-72cac19d31eb",
    			"away-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/thunder.png?alt=media&token=26099ca7-f9fe-42f4-811f-e9e95abb4729"
    		}
      }, {
        type: "schedules",
        id: "Game 23",
        attributes: {
    			away: "West Auckland Admirals",
    			date: "Saturday, July 8th, 4:35pm",
    			home: "Canterbury Red Devils",
    			"league-game": "Game 23",
    			venue: "Christchurch Alpine Ice",
    			"home-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/devils.png?alt=media&token=22485eeb-bfcb-4d44-bfd3-7f8452353fa9",
    			"away-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/admirals.png?alt=media&token=4effc8b6-fffa-4d57-8159-2ba45e630a60"
    		}
      }, {
        type: "schedules",
        id: "Game 24",
        attributes: {
    			away: "West Auckland Admirals",
    			date: "Sunday, July 9th 2017, 4:30pm",
    			home: "Canterbury Red Devils",
    			"league-game": "Game 24",
    			venue: "Christchurch Alpine Ice",
    			"home-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/devils.png?alt=media&token=22485eeb-bfcb-4d44-bfd3-7f8452353fa9",
    			"away-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/admirals.png?alt=media&token=4effc8b6-fffa-4d57-8159-2ba45e630a60"
    		}
      }, {
        type: "schedules",
        id: "Game 25",
        attributes: {
    			away: "West Auckland Admirals",
    			date: "Friday, July 14th, 6:50pm",
    			home: "Skycity Stampede",
    			"league-game": "Game 25",
    			venue: "Queenstown Ice Arena",
    			"home-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/stampede.png?alt=media&token=0729a81d-eccf-426a-99c6-72cac19d31eb",
    			"away-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/admirals.png?alt=media&token=4effc8b6-fffa-4d57-8159-2ba45e630a60"
    		}
      }, {
        type: "schedules",
        id: "Game 26",
        attributes: {
    			away: "West Auckland Admirals",
    			date: "Saturday, July 15th, 6:50pm",
    			home: "Skycity Stampede",
    			"league-game": "Game 26",
    			venue: "Queenstown Ice Arena",
    			"home-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/stampede.png?alt=media&token=0729a81d-eccf-426a-99c6-72cac19d31eb",
    			"away-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/admirals.png?alt=media&token=4effc8b6-fffa-4d57-8159-2ba45e630a60"
    		}
      }, {
        type: "schedules",
        id: "Game 27",
        attributes: {
    			away: "Dunedin Thunder",
    			date: "Sunday, July 16th, 4:45pm",
    			home: "Botany Swarm",
    			"league-game": "Game 27",
    			venue: "Paradice Botany",
    			"home-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/swarm.png?alt=media&token=6b9f1231-5837-4dde-9c31-8db2fedb96b8",
    			"away-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/thunder.png?alt=media&token=26099ca7-f9fe-42f4-811f-e9e95abb4729"
    		}
      }, {
        type: "schedules",
        id: "Game 28",
        attributes: {
    			away: "Dunedin Thunder",
    			date: "Saturday, July 22nd, 4:45pm",
    			home: "Botany Swarm",
    			"league-game": "Game 28",
    			venue: "Paradice Botany",
    			"home-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/swarm.png?alt=media&token=6b9f1231-5837-4dde-9c31-8db2fedb96b8",
    			"away-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/thunder.png?alt=media&token=26099ca7-f9fe-42f4-811f-e9e95abb4729"
    		}
      }, {
        type: "schedules",
        id: "Game 29",
        attributes: {
    			away: "Skycity Stampede",
    			date: "Saturday, July 22nd, 4:45pm",
    			home: "Botany Swarm",
    			"league-game": "Game 29",
    			venue: "Paradice Botany",
    			"home-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/swarm.png?alt=media&token=6b9f1231-5837-4dde-9c31-8db2fedb96b8",
    			"away-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/stampede.png?alt=media&token=0729a81d-eccf-426a-99c6-72cac19d31eb"
    		}
      }, {
        type: "schedules",
        id: "Game 30",
        attributes: {
    			away: "Skycity Stampede",
    			date: "Sunday, July 23rd, 4:45pm",
    			home: "Botany Swarm",
    			"league-game": "Game 30",
    			venue: "Paradice Botany",
    			"home-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/swarm.png?alt=media&token=6b9f1231-5837-4dde-9c31-8db2fedb96b8",
    			"away-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/stampede.png?alt=media&token=0729a81d-eccf-426a-99c6-72cac19d31eb"
    		}
      }, {
        type: "schedules",
        id: "Game 31",
        attributes: {
    			away: "Canterbury Red Devils",
    			date: "Saturday, July 22nd 2017, 4:45pm",
    			home: "Dunedin Thunder",
    			"league-game": "Game 31",
    			venue: "Dunedin Ice Stadium",
    			"home-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/thunder.png?alt=media&token=26099ca7-f9fe-42f4-811f-e9e95abb4729",
    			"away-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/devils.png?alt=media&token=22485eeb-bfcb-4d44-bfd3-7f8452353fa9"
    		}
      }, {
        type: "schedules",
        id: "Game 32",
        attributes: {
    			away: "Canterbury Red Devils",
    			date: "Sunday, July 23nd 2017, 4:45pm",
    			home: "Dunedin Thunder",
    			"league-game": "Game 32",
    			venue: "Dunedin Ice Stadium",
    			"home-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/thunder.png?alt=media&token=26099ca7-f9fe-42f4-811f-e9e95abb4729",
    			"away-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/devils.png?alt=media&token=22485eeb-bfcb-4d44-bfd3-7f8452353fa9"
    		}
      }, {
        type: "schedules",
        id: "Game 33",
        attributes: {
    			away: "Dunedin Thunder",
    			date: "Saturday July 29th, 4:45pm",
    			home: "West Auckland Admirals",
    			"league-game": "Game 33",
    			venue: "Paradice Avondale",
    			"home-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/admirals.png?alt=media&token=4effc8b6-fffa-4d57-8159-2ba45e630a60",
    			"away-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/thunder.png?alt=media&token=26099ca7-f9fe-42f4-811f-e9e95abb4729"
    		}
      }, {
        type: "schedules",
        id: "Game 34",
        attributes: {
    			away: "Dunedin Thunder",
    			date: "Sunday July 30th, 4:45pm",
    			home: "West Auckland Admirals",
    			"league-game": "Game 34",
    			venue: "Paradice Avondale",
    			"home-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/admirals.png?alt=media&token=4effc8b6-fffa-4d57-8159-2ba45e630a60",
    			"away-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/thunder.png?alt=media&token=26099ca7-f9fe-42f4-811f-e9e95abb4729"
    		}
      }, {
        type: "schedules",
        id: "Game 35",
        attributes: {
    			away: "Botany Swarm",
    			date: "Saturday, July 29th, 4:45pm",
    			home: "Canterbury Red Devils",
    			"league-game": "Game 35",
    			venue: "Christchurch Alpine Ice",
    			"home-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/devils.png?alt=media&token=22485eeb-bfcb-4d44-bfd3-7f8452353fa9",
    			"away-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/swarm.png?alt=media&token=6b9f1231-5837-4dde-9c31-8db2fedb96b8"
    		}
      }, {
        type: "schedules",
        id: "Game 36",
        attributes: {
    			away: "Botany Swarm",
    			date: "Sunday, July 30th, 4:45pm",
    			home: "Canterbury Red Devils",
    			"league-game": "Game 36",
    			venue: "Christchurch Alpine Ice",
    			"home-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/devils.png?alt=media&token=22485eeb-bfcb-4d44-bfd3-7f8452353fa9",
    			"away-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/swarm.png?alt=media&token=6b9f1231-5837-4dde-9c31-8db2fedb96b8"
    		}
    }, {
        type: "schedules",
        id: "Game 37",
        attributes: {
    			away: "Skycity Stampede",
    			date: "Saturday, August 5th, 4:45pm",
    			home: "Canterbury Red Devils",
    			"league-game": "Game 37",
    			venue: "Christchurch Alpine Ice",
    			"home-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/devils.png?alt=media&token=22485eeb-bfcb-4d44-bfd3-7f8452353fa9",
    			"away-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/stampede.png?alt=media&token=0729a81d-eccf-426a-99c6-72cac19d31eb"
    		}
      }, {
        type: "schedules",
        id: "Game 38",
        attributes: {
    			away: "Skycity Stampede",
    			date: "Sunday, August 6th, 4:45pm",
    			home: "Canterbury Red Devils",
    			"league-game": "Game 38",
    			venue: "Christchurch Alpine Ice",
    			"home-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/devils.png?alt=media&token=22485eeb-bfcb-4d44-bfd3-7f8452353fa9",
    			"away-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/stampede.png?alt=media&token=0729a81d-eccf-426a-99c6-72cac19d31eb"
    		}
      }, {
        type: "schedules",
        id: "Game 39",
        attributes: {
    			away: "West Auckland Admirals",
    			date: "Saturday August 5th, 4:45pm",
    			home: "Botany Swarm",
    			"league-game": "Game 39",
    			venue: "Paradice Botany",
    			"home-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/swarm.png?alt=media&token=6b9f1231-5837-4dde-9c31-8db2fedb96b8",
    			"away-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/admirals.png?alt=media&token=4effc8b6-fffa-4d57-8159-2ba45e630a60"
    		}
      }, {
        type: "schedules",
        id: "Game 40",
        attributes: {
    			away: "West Auckland Admirals",
    			date: "Sunday August 6th, 4:45pm",
    			home: "Botany Swarm",
    			"league-game": "Game 40",
    			venue: "Paradice Botany",
    			"home-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/swarm.png?alt=media&token=6b9f1231-5837-4dde-9c31-8db2fedb96b8",
    			"away-logo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/admirals.png?alt=media&token=4effc8b6-fffa-4d57-8159-2ba45e630a60"
        }
      }];

    this.get('/schedules', function(db, request) {
      if(request.queryParams.team !== undefined) {
        let filteredTeam = schedules.filter(function(i) {
          return i.attributes.team.toLowerCase().indexOf(request.queryParams.team.toLowerCase()) !== -1;
        });
        return { data: filteredTeam };
      } else {
        return { data: schedules };
      }
    });

    this.get('/schedules/:id', function (db, request) {
      return { data: schedules.find((schedule) => request.params.id === schedule.id) };
 });
}
