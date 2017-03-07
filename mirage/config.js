export default function() {
  this.namespace = 'api';

  this.get('/schedules', () => {
    return {
      data: [
        {
          "id": "Game 01",
          "away": "Canterbury Red Devils",
          "date": "Friday, May 26th, 6:50pm",
          "home": "Skycity Stampede",
          "leagueGame": "Game 1",
          "venue": "Queenstown Ice Arena",
          "homeLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/stampede.png?alt=media&token=0729a81d-eccf-426a-99c6-72cac19d31eb",
          "awayLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/devils.png?alt=media&token=22485eeb-bfcb-4d44-bfd3-7f8452353fa9"
        },
    		{
          "id": "Game 02",
    			"away": "Canterbury Red Devils",
    			"date": "Saturday, May 27th, 6:50pm",
    			"home": "Skycity Stampede",
    			"leagueGame": "Game 2",
    			"venue": "Queenstown Ice Arena",
    			"homeLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/stampede.png?alt=media&token=0729a81d-eccf-426a-99c6-72cac19d31eb",
    			"awayLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/devils.png?alt=media&token=22485eeb-bfcb-4d44-bfd3-7f8452353fa9"
    	 	},
    		{
          "id": "Game 03",
    			"away": "Botany Swarm",
    			"date": "Saturday, May 27th, 4:30pm",
    			"home": "West Auckland Admirals",
    			"leagueGame": "Game 3",
    			"venue": "Paradice Avondale",
    			"homeLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/admirals.png?alt=media&token=4effc8b6-fffa-4d57-8159-2ba45e630a60",
    			"awayLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/swarm.png?alt=media&token=6b9f1231-5837-4dde-9c31-8db2fedb96b8"
    		},
    		{
          "id": "Game 04",
    			"away": "Botany Swarm",
    			"date": "Sunday, May 28th, 4:30pm",
    			"home": "West Auckland Admirals",
    			"leagueGame": "Game 4",
    			"venue": "Paradice Avondale",
    			"homeLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/admirals.png?alt=media&token=4effc8b6-fffa-4d57-8159-2ba45e630a60",
    			"awayLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/swarm.png?alt=media&token=6b9f1231-5837-4dde-9c31-8db2fedb96b8"
    		},
    		{
          "id": "Game 05",
    			"away": "West Auckland Admirals",
    			"date": "Saturday, June 10th, 4:30pm",
    			"home": "Dunedin Thunder",
    			"leagueGame": "Game 5",
    			"venue": "Dunedin Ice Stadium",
    			"homeLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/thunder.png?alt=media&token=26099ca7-f9fe-42f4-811f-e9e95abb4729",
    			"awayLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/admirals.png?alt=media&token=4effc8b6-fffa-4d57-8159-2ba45e630a60"
    		},
    		{
          "id": "Game 06",
    			"away": "West Auckland Admirals",
    			"date": "Saturday, June 11th, 4:30pm",
    			"home": "Dunedin Thunder",
    			"leagueGame": "Game 6",
    			"venue": "Dunedin Ice Stadium",
    			"homeLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/thunder.png?alt=media&token=26099ca7-f9fe-42f4-811f-e9e95abb4729",
    			"awayLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/admirals.png?alt=media&token=4effc8b6-fffa-4d57-8159-2ba45e630a60"
    		},
    		{
          "id": "Game 07",
    			"away": "Canterbury Red Devils",
    			"date": "Saturday, June 10th, 4:45pm",
    			"home": "Botany Swarm",
    			"leagueGame": "Game 7",
    			"venue": "Paradice Botany",
    			"homeLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/swarm.png?alt=media&token=6b9f1231-5837-4dde-9c31-8db2fedb96b8",
    			"awayLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/devils.png?alt=media&token=22485eeb-bfcb-4d44-bfd3-7f8452353fa9"
    		},
    		{
          "id": "Game 08",
    			"away": "Canterbury Red Devils",
    			"date": "Sunday, June 11th, 4:45pm",
    			"home": "Botany Swarm",
    			"leagueGame": "Game 8",
    			"venue": "Paradice Botany",
    			"homeLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/swarm.png?alt=media&token=6b9f1231-5837-4dde-9c31-8db2fedb96b8",
    			"awayLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/devils.png?alt=media&token=22485eeb-bfcb-4d44-bfd3-7f8452353fa9"
    		},
    		{
          "id": "Game 09",
    			"away": "Skycity Stampede",
    			"date": "Saturday, June 17th, 4:40pm",
    			"home": "Dunedin Thunder",
    			"leagueGame": "Game 9",
    			"venue": "Dunedin Ice Stadium",
    			"homeLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/thunder.png?alt=media&token=26099ca7-f9fe-42f4-811f-e9e95abb4729",
    			"awayLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/stampede.png?alt=media&token=0729a81d-eccf-426a-99c6-72cac19d31eb"
    		},
    		{
          "id": "Game 10",
    			"away": "Skycity Stampede",
    			"date": "Sunday, June 18th, 4:40pm",
    			"home": "Dunedin Thunder",
    			"leagueGame": "Game 10",
    			"venue": "Dunedin Ice Stadium",
    			"homeLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/thunder.png?alt=media&token=26099ca7-f9fe-42f4-811f-e9e95abb4729",
    			"awayLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/stampede.png?alt=media&token=0729a81d-eccf-426a-99c6-72cac19d31eb"
    		},
    		{
          "id": "Game 11",
    			"away": "Canterbury Red Devils",
    			"date": "Saturday, June 17th, 4:30pm",
    			"home": "West Auckland Admirals",
    			"leagueGame": "Game 11",
    			"venue": "Paradice Avondale",
    			"homeLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/admirals.png?alt=media&token=4effc8b6-fffa-4d57-8159-2ba45e630a60",
    			"awayLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/devils.png?alt=media&token=22485eeb-bfcb-4d44-bfd3-7f8452353fa9"
    		},
    		{
          "id": "Game 12",
    			"away": "Canterbury Red Devils",
    			"date": "Sunday, June 18th, 4:30pm",
    			"home": "West Auckland Admirals",
    			"leagueGame": "Game 12",
    			"venue": "Paradice Avondale",
    			"homeLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/admirals.png?alt=media&token=4effc8b6-fffa-4d57-8159-2ba45e630a60",
    			"awayLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/devils.png?alt=media&token=22485eeb-bfcb-4d44-bfd3-7f8452353fa9"
    		},
      	{
          "id": "Game 13",
    			"away": "Botany Swarm",
    			"date": "Friday, June 23rd, 7:40pm",
    			"home": "Skycity Stampede",
    			"leagueGame": "Game 13",
    			"venue": "Queenstown Ice Arena",
    			"homeLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/stampede.png?alt=media&token=0729a81d-eccf-426a-99c6-72cac19d31eb",
    			"awayLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/swarm.png?alt=media&token=6b9f1231-5837-4dde-9c31-8db2fedb96b8"
    		},
    		{
          "id": "Game 14",
    			"away": "Botany Swarm",
    			"date": "Saturday, June 24th, 6:50pm",
    			"home": "Skycity Stampede",
    			"leagueGame": "Game 14",
    			"venue": "Queenstown Ice Arena",
    			"homeLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/stampede.png?alt=media&token=0729a81d-eccf-426a-99c6-72cac19d31eb",
    			"awayLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/swarm.png?alt=media&token=6b9f1231-5837-4dde-9c31-8db2fedb96b8"
    		},
    		{
          "id": "Game 15",
    			"away": "Dunedin Thunder",
    			"date": "Saturday, June 24th, 4:45pm",
    			"home": "Canterbury Red Devils",
    			"leagueGame": "Game 15",
    			"venue": "Christchurch Alpine Ice",
    			"homeLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/devils.png?alt=media&token=22485eeb-bfcb-4d44-bfd3-7f8452353fa9",
    			"awayLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/thunder.png?alt=media&token=26099ca7-f9fe-42f4-811f-e9e95abb4729"
    		},
    		{
          "id": "Game 16",
    			"away": "Dunedin Thunder",
    			"date": "Sunday, June 25th, 4:45pm",
    			"home": "Canterbury Red Devils",
    			"leagueGame": "Game 16",
    			"venue": "Christchurch Alpine Ice",
    			"homeLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/devils.png?alt=media&token=22485eeb-bfcb-4d44-bfd3-7f8452353fa9",
    			"awayLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/thunder.png?alt=media&token=26099ca7-f9fe-42f4-811f-e9e95abb4729"
    		},
    		{
          "id": "Game 17",
    			"away": "Skycity Stampede",
    			"date": "Saturday, July 1st, 4:30pm",
    			"home": "West Auckland Admirals",
    			"leagueGame": "Game 17",
    			"venue": "Paradice Avondale",
    			"homeLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/admirals.png?alt=media&token=4effc8b6-fffa-4d57-8159-2ba45e630a60",
    			"awayLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/stampede.png?alt=media&token=0729a81d-eccf-426a-99c6-72cac19d31eb"
    		},
    		{
          "id": "Game 18",
    			"away": "Skycity Stampede",
    			"date": "Sunday, July 2nd, 4:30pm",
    			"home": "West Auckland Admirals",
    			"leagueGame": "Game 18",
    			"venue": "Paradice Avondale",
    			"homeLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/admirals.png?alt=media&token=4effc8b6-fffa-4d57-8159-2ba45e630a60",
    			"awayLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/stampede.png?alt=media&token=0729a81d-eccf-426a-99c6-72cac19d31eb"
    		},
    		{
          "id": "Game 19",
    			"away": "Botany Swarm",
    			"date": "Saturday, July 1st, 4:30pm",
    			"home": "Dunedin Thunder",
    			"leagueGame": "Game 19",
    			"venue": "Dunedin Ice Stadium",
    			"homeLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/thunder.png?alt=media&token=26099ca7-f9fe-42f4-811f-e9e95abb4729",
    			"awayLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/swarm.png?alt=media&token=6b9f1231-5837-4dde-9c31-8db2fedb96b8"
    		},
    		{
          "id": "Game 20",
    			"away": "Botany Swarm",
    			"date": "Sunday, July 2nd, 4:30pm",
    			"home": "Dunedin Thunder",
    			"leagueGame": "Game 20",
    			"venue": "Dunedin Ice Stadium",
    			"homeLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/thunder.png?alt=media&token=26099ca7-f9fe-42f4-811f-e9e95abb4729",
    			"awayLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/swarm.png?alt=media&token=6b9f1231-5837-4dde-9c31-8db2fedb96b8"
    		},
    		{
          "id": "Game 21",
    			"away": "Dunedin Thunder",
    			"date": "Friday, July 7th, 6:50pm",
    			"home": "Skycity Stampede",
    			"leagueGame": "Game 21",
    			"venue": "Queenstown Ice Arena",
    			"homeLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/stampede.png?alt=media&token=0729a81d-eccf-426a-99c6-72cac19d31eb",
    			"awayLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/thunder.png?alt=media&token=26099ca7-f9fe-42f4-811f-e9e95abb4729"
    		},
    		{
          "id": "Game 22",
    			"away": "Dunedin Thunder",
    			"date": "Saturday, July 8th, 6:50pm",
    			"home": "Skycity Stampede",
    			"leagueGame": "Game 22",
    			"venue": "Queenstown Ice Arena",
    			"homeLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/stampede.png?alt=media&token=0729a81d-eccf-426a-99c6-72cac19d31eb",
    			"awayLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/thunder.png?alt=media&token=26099ca7-f9fe-42f4-811f-e9e95abb4729"
    		},
    		{
          "id": "Game 23",
    			"away": "West Auckland Admirals",
    			"date": "Saturday, July 8th, 4:35pm",
    			"home": "Canterbury Red Devils",
    			"leagueGame": "Game 23",
    			"venue": "Christchurch Alpine Ice",
    			"homeLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/devils.png?alt=media&token=22485eeb-bfcb-4d44-bfd3-7f8452353fa9",
    			"awayLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/admirals.png?alt=media&token=4effc8b6-fffa-4d57-8159-2ba45e630a60"
    		},
    		{
          "id": "Game 24",
    			"away": "West Auckland Admirals",
    			"date": "Sunday, July 9th 2017, 4:30pm",
    			"home": "Canterbury Red Devils",
    			"leagueGame": "Game 24",
    			"venue": "Christchurch Alpine Ice",
    			"homeLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/devils.png?alt=media&token=22485eeb-bfcb-4d44-bfd3-7f8452353fa9",
    			"awayLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/admirals.png?alt=media&token=4effc8b6-fffa-4d57-8159-2ba45e630a60"
    		},
    		{
          "id": "Game 25",
    			"away": "West Auckland Admirals",
    			"date": "Friday, July 14th, 6:50pm",
    			"home": "Skycity Stampede",
    			"leagueGame": "Game 25",
    			"venue": "Queenstown Ice Arena",
    			"homeLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/stampede.png?alt=media&token=0729a81d-eccf-426a-99c6-72cac19d31eb",
    			"awayLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/admirals.png?alt=media&token=4effc8b6-fffa-4d57-8159-2ba45e630a60"
    		},
    		{
          "id": "Game 26",
    			"away": "West Auckland Admirals",
    			"date": "Saturday, July 15th, 6:50pm",
    			"home": "Skycity Stampede",
    			"leagueGame": "Game 26",
    			"venue": "Queenstown Ice Arena",
    			"homeLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/stampede.png?alt=media&token=0729a81d-eccf-426a-99c6-72cac19d31eb",
    			"awayLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/admirals.png?alt=media&token=4effc8b6-fffa-4d57-8159-2ba45e630a60"
    		},
    		{
          "id": "Game 27",
    			"away": "Dunedin Thunder",
    			"date": "Sunday, July 16th, 4:45pm",
    			"home": "Botany Swarm",
    			"leagueGame": "Game 27",
    			"venue": "Paradice Botany",
    			"homeLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/swarm.png?alt=media&token=6b9f1231-5837-4dde-9c31-8db2fedb96b8",
    			"awayLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/thunder.png?alt=media&token=26099ca7-f9fe-42f4-811f-e9e95abb4729"
    		},
    		{
          "id": "Game 28",
    			"away": "Dunedin Thunder",
    			"date": "Saturday, July 22nd, 4:45pm",
    			"home": "Botany Swarm",
    			"leagueGame": "Game 28",
    			"venue": "Paradice Botany",
    			"homeLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/swarm.png?alt=media&token=6b9f1231-5837-4dde-9c31-8db2fedb96b8",
    			"awayLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/thunder.png?alt=media&token=26099ca7-f9fe-42f4-811f-e9e95abb4729"
    		},
    		{
          "id": "Game 29",
    			"away": "Skycity Stampede",
    			"date": "Saturday, July 22nd, 4:45pm",
    			"home": "Botany Swarm",
    			"leagueGame": "Game 29",
    			"venue": "Paradice Botany",
    			"homeLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/swarm.png?alt=media&token=6b9f1231-5837-4dde-9c31-8db2fedb96b8",
    			"awayLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/stampede.png?alt=media&token=0729a81d-eccf-426a-99c6-72cac19d31eb"
    		},
    		{
          "id": "Game 30",
    			"away": "Skycity Stampede",
    			"date": "Sunday, July 23rd, 4:45pm",
    			"home": "Botany Swarm",
    			"leagueGame": "Game 30",
    			"venue": "Paradice Botany",
    			"homeLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/swarm.png?alt=media&token=6b9f1231-5837-4dde-9c31-8db2fedb96b8",
    			"awayLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/stampede.png?alt=media&token=0729a81d-eccf-426a-99c6-72cac19d31eb"
    		},
    		{
          "id": "Game 31",
    			"away": "Canterbury Red Devils",
    			"date": "Saturday, July 22nd 2017, 4:45pm",
    			"home": "Dunedin Thunder",
    			"leagueGame": "Game 31",
    			"venue": "Dunedin Ice Stadium",
    			"homeLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/thunder.png?alt=media&token=26099ca7-f9fe-42f4-811f-e9e95abb4729",
    			"awayLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/devils.png?alt=media&token=22485eeb-bfcb-4d44-bfd3-7f8452353fa9"
    		},
    		{
          "id": "Game 32",
    			"away": "Canterbury Red Devils",
    			"date": "Sunday, July 23nd 2017, 4:45pm",
    			"home": "Dunedin Thunder",
    			"leagueGame": "Game 32",
    			"venue": "Dunedin Ice Stadium",
    			"homeLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/thunder.png?alt=media&token=26099ca7-f9fe-42f4-811f-e9e95abb4729",
    			"awayLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/devils.png?alt=media&token=22485eeb-bfcb-4d44-bfd3-7f8452353fa9"
    		},
    		{
          "id": "Game 33",
    			"away": "Dunedin Thunder",
    			"date": "Saturday July 29th, 4:45pm",
    			"home": "West Auckland Admirals",
    			"leagueGame": "Game 33",
    			"venue": "Paradice Avondale",
    			"homeLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/admirals.png?alt=media&token=4effc8b6-fffa-4d57-8159-2ba45e630a60",
    			"awayLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/thunder.png?alt=media&token=26099ca7-f9fe-42f4-811f-e9e95abb4729"
    		},
    		{
          "id": "Game 34",
    			"away": "Dunedin Thunder",
    			"date": "Sunday July 30th, 4:45pm",
    			"home": "West Auckland Admirals",
    			"leagueGame": "Game 34",
    			"venue": "Paradice Avondale",
    			"homeLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/admirals.png?alt=media&token=4effc8b6-fffa-4d57-8159-2ba45e630a60",
    			"awayLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/thunder.png?alt=media&token=26099ca7-f9fe-42f4-811f-e9e95abb4729"
    		},
    		{
          "id": "Game 35",
    			"away": "Botany Swarm",
    			"date": "Saturday, July 29th, 4:45pm",
    			"home": "Canterbury Red Devils",
    			"leagueGame": "Game 35",
    			"venue": "Christchurch Alpine Ice",
    			"homeLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/devils.png?alt=media&token=22485eeb-bfcb-4d44-bfd3-7f8452353fa9",
    			"awayLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/swarm.png?alt=media&token=6b9f1231-5837-4dde-9c31-8db2fedb96b8"
    		},
    		{
          "id": "Game 36",
    			"away": "Botany Swarm",
    			"date": "Sunday, July 30th, 4:45pm",
    			"home": "Canterbury Red Devils",
    			"leagueGame": "Game 36",
    			"venue": "Christchurch Alpine Ice",
    			"homeLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/devils.png?alt=media&token=22485eeb-bfcb-4d44-bfd3-7f8452353fa9",
    			"awayLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/swarm.png?alt=media&token=6b9f1231-5837-4dde-9c31-8db2fedb96b8"
    		},
    		{
          "id": "Game 37",
    			"away": "Skycity Stampede",
    			"date": "Saturday, August 5th, 4:45pm",
    			"home": "Canterbury Red Devils",
    			"leagueGame": "Game 37",
    			"venue": "Christchurch Alpine Ice",
    			"homeLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/devils.png?alt=media&token=22485eeb-bfcb-4d44-bfd3-7f8452353fa9",
    			"awayLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/stampede.png?alt=media&token=0729a81d-eccf-426a-99c6-72cac19d31eb"
    		},
    		{
          "id": "Game 38",
    			"away": "Skycity Stampede",
    			"date": "Sunday, August 6th, 4:45pm",
    			"home": "Canterbury Red Devils",
    			"leagueGame": "Game 38",
    			"venue": "Christchurch Alpine Ice",
    			"homeLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/devils.png?alt=media&token=22485eeb-bfcb-4d44-bfd3-7f8452353fa9",
    			"awayLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/stampede.png?alt=media&token=0729a81d-eccf-426a-99c6-72cac19d31eb"
    		},
    		{
          "id": "Game 39",
    			"away": "West Auckland Admirals",
    			"date": "Saturday August 5th, 4:45pm",
    			"home": "Botany Swarm",
    			"leagueGame": "Game 39",
    			"venue": "Paradice Botany",
    			"homeLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/swarm.png?alt=media&token=6b9f1231-5837-4dde-9c31-8db2fedb96b8",
    			"awayLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/admirals.png?alt=media&token=4effc8b6-fffa-4d57-8159-2ba45e630a60"
    		},
    		{
          "id": "Game 40",
    			"away": "West Auckland Admirals",
    			"date": "Sunday August 6th, 4:45pm",
    			"home": "Botany Swarm",
    			"leagueGame": "Game 40",
    			"venue": "Paradice Botany",
    			"homeLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/swarm.png?alt=media&token=6b9f1231-5837-4dde-9c31-8db2fedb96b8",
    			"awayLogo": "https://firebasestorage.googleapis.com/v0/b/nzihl-game-center.appspot.com/o/admirals.png?alt=media&token=4effc8b6-fffa-4d57-8159-2ba45e630a60"
    		}
      ]
    };
  });

}
