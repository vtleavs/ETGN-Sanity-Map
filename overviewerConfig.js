var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "ETGN Sanity Pack - overworld",
        "ETGN Sanity Pack - nether"
    ],
    "map": {
        "debug": false,
        "cacheTag": "1608675020",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "Overworld Map Render",
            "zoomLevels": 11,
            "defaultZoom": 8,
            "maxZoom": 11,
            "path": "overworld",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "ETGN Sanity Pack - overworld",
            "last_rendertime": 1608673000,
            "imgextension": "jpg",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -259,
                75,
                100
            ],
            "minZoom": 2,
            "spawn": [
                -259,
                75,
                100
            ],
            "north_direction": 0
        },
        {
            "name": "Underworld Map Render",
            "zoomLevels": 7,
            "defaultZoom": 7,
            "maxZoom": 7,
            "path": "underworld",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "ETGN Sanity Pack - nether",
            "last_rendertime": 1608672403,
            "imgextension": "jpg",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -259,
                75,
                100
            ],
            "minZoom": 2,
            "spawn": false,
            "north_direction": 0
        }
    ]
};
