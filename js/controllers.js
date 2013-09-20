
function unique(list, field) {
  var result = [];
  for(var i=0; i < list.length; i++) {
    var val = list[i][field];
    if(result.indexOf(val) == -1) {
      result.push(val)
    }
  }
  
  return result;
}

function GreetCtrl($scope) {
  $scope.name = 'World';
}
 
function SectionsCtrl($scope, $q) {

  $scope.tracks = [
    {
      title: "Let's Give a Hand"
      ,album: "Who's Your Daddy?"
      ,number: 1
    }
    ,{
      title: 'Hester Mofet'
      ,album: "Who's Your Daddy?"
      ,number: 2
    }
    ,{
      title: 'Build My Hate'
      ,album: "Who's Your Daddy?"
      ,number: 3
    }
  ];
  
  var albumsDeferred = $q.defer()
  $scope.albums = albumsDeferred.promise;
  var uniqueAlbums = unique($scope.tracks, 'album');
  albumsDeferred.resolve(uniqueAlbums);
  
  $scope.sections = [
    {
      id: 'home'
      ,navTitle: 'Home'
      ,title: 'Welcome'
      ,content: 'This section contains the news of the band'
      ,news: [
        {
          title: 'News 1'
          ,date: '2013-09-01'
          ,content: 'This is a news'
        }
        ,{
          title: 'News 2'
          ,date: '2013-09-04'
          ,content: 'This is another news'
        }
      ]
    }
    ,{
      id: 'audio'
      ,navTitle: 'Audio'
      ,title: 'Audio'
      ,content: 'Here come the audio track grouped by album'
      ,albums: $scope.albums
      ,tracks: $scope.tracks
    }
    ,{
      id: 'video'
      ,navTitle: 'Video'
      ,title: 'Video'
      ,content: 'May thou enjoy some live video'
      ,videos: [
        {
          title: 'Video 1'
          ,url: 'http://www.youtube.com'
        }
      ]
    }
    ,{
      id: 'band'
      ,navTitle: 'The Band'
      ,title: 'The Band'
      ,content: "Let's introduce the band members"
      ,members: [
        {
          name: "Max"
          ,bio: "This is Max' bio"
          ,instruments: ['Guitar', 'Vocals']
          ,gears: {
            'Guitars': ["Jackson RR", "Jackson Kelly"]
            ,'Effects': [
              "Dunlop Crybaby Wha"
              ,"Visual Sound Double Trouble"
              ,"Boss Harmonist PS-6"
              ,"MXR Phaser Phase 90"
              ,"T-Rex Tonebug Chorus/Flanger"
              ,"MXR Boost MC-401"
              ,"G-Lab Smooth Delay SD-1"
              ,"Boss Metal Zone MT-2"
            ]
            ,'Amplifiers': [
              "Marshall JCM 2000 DSL 401"
              ,"Peavey Ultra+ w/ Marshall 1960AV Cabinet"
            ]
            ,'Looper/Switcher': [
              "G-Lab GSC-3"
              ,"G-Lab MIDI 2x Loop M2L (x2)"
            ]
            ,'Other': [
              "tc electronic Polytune Tuner"
              ,"ISP Noise Gate Decimator G String"
            ]
          }
        }
        ,{
          name: "David"
          ,bio: "This is David's bio"
          ,instruments: ['Drums']
          ,gears: {
            'Drum Kit': ['??']
          }
        }
        ,{
          name: "Benji"
          ,bio: "This is Benji's bio"
          ,instruments: ['Bass']
          ,gears: {
            'Bass': ['LTD B-1005']
            ,'Effects': ['Dunlop Bass Q Crybaby Wha', 'Bass Overdrive Boss ODB-3']
          }
        }
      ]
    }
  ];
}