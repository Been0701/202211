const API_KEY = '626968586c646c7739305778636177';
let stationList = [];

fetch(`http://openapi.seoul.go.kr:8088/${API_KEY}/json/bikeList/1/5/`)
    .then((response) => response.json())
    .then((data) => {
        let rows = data["rentBikeStatus"]["row"];
        rows.forEach((row)=>{
            let stationName = row["stationName"];
            let lat = row["stationLatitude"];
            let long = row["stationLongitude"];

            // 객체 생성
            let stationInfo = {
                stationName: stationName,
                stationLatitude: lat,
                stationLongitude: long
            };
            stationList.push(stationInfo);
        })
    })
    .catch((error) => console.log(error))

    let mapContainer = document.getElementById('map'); // 지도를 표시할 div 
    let mapOption = { 
        center: new kakao.maps.LatLng(37.54, 126.9406), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
let map = new kakao.maps.Map(mapContainer, mapOption);     

// 마커를 표시할 위치와 title 객체 배열입니다 
let positions = [
    {
        title: stationList[i].stationName, 
        latlng: new kakao.maps.LatLng(stationList[i].stationLatitude, stationList[i].stationLongitude)
    }
];

// 마커 이미지의 이미지 주소입니다
var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
    
for (var i = 0; i < positions.length; i ++) {
    
    // 마커 이미지의 이미지 크기 입니다
    var imageSize = new kakao.maps.Size(24, 35); 
    
    // 마커 이미지를 생성합니다    
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
    
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image : markerImage // 마커 이미지 
    });
}