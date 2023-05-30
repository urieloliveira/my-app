#### Test User Log View
get a user posts
```
/api/test1_userLogView/NO_SESSION/
```


Returns: posts for a log.


"Files" returns only "FileTop"  This is the file to show in the summary view of this post.  Contains the size (w,h), ratio (r), and order number (o).  Along with a url to thumb(Thumb3URL) and full size image (FileURL).  



```
{
    "ver": "test1",
    "cmd": "userLogView",
    "t": 1553796055,
    "tr": 0.0026710033416748,
    "success": true,
    "payload": {
        "PostCount": 2,
        "Posts": [
            {
                "Post": {
                    "Mood": "OK",
                    "Desc": "This is fun until I get a hair ball.",
                    "UserId": "usrwerMx9cqwerAAB123werfaM7hyT",
                    "debug": "true",
                    "PostId": "entfwerawFmwer9VHab6",
                    "Name": "Licking myself",
                    "DateCreated": "10/05/2018 16:36:24",
                    "DateStart": "05/09/2014 00:00:00",
                    "DateNoticeChange": "10/17/2019 22:20:41",
                    "DatePostUpdated": "11/12/2019 23:53:17",
                    "DateEnd": "",
                    "Type": "Faves",
                    "User": "Nerd McJones",
                    "FirstName": "Nerd",
                    "LastName": "McJones",
                    "NickName": "Ferris LeChat",
                    "DateBirthDay": "01/06/2003",
                    "Color": "Orange",
                    "DateStartCalc": "10/05/2019",
                    "DateEndCalc": "12/00/2019",
                    "TimeStartCalc": "03:00:00",
                    "TimeEndCalc": "04:00:00",
                    "FileCount": 3,
                    "CommentCount": 1
                },
                "Files": {
                    "CacheCreated": 1554407607,
                    "FileTop": {
                        "Id": "filwerrcULXkwe548353739",
                        "FileURL": "http://api-social.apptazer.com/vassets/large/e29_154er_jGqerKqi_jan-24-2019.jpg",
                        "ThumbURL": "http://api-social.apptazer.com/vassets/thumb/e29_15wer3739_jGqerpKqi_jan-24-2019.jpg",
                        "Thumb2URL": "http://api-social.apptazer.com/vassets/thumb/e29_15wer3739_jGqerpKqi_jan-24-2019.jpg",
                        "Thumb3URL": "http://api-social.apptazer.com/vassets/thumb/e29_15wer3739_jGqerpKqi_jan-24-2019.jpg",
                        "w": 1080,
                        "h": 833,
                        "r": 1.2965,
                        "o": 1,
                        "MediaType": "Image",
                        "MediaStatus": "Ready"
                    }
                },
            },
            {
                "Post": {
                    "Mood": "OK",
                    "Desc": "oh my good ness.. today is rough",
                    "UserId": "usrmMx9cqAABwerM7hyT",
                    "PostId": "entLdfCawef4867JhlUy1",
                    "Name": "Licking myself",
                    "DateCreated": "01/17/2019 23:21:52",
                    "DateStart": "05/09/2014 00:00:00",
                    "DateEnd": "",
                    "Type": "Faves",
                    "User": "Nerd McJones",
                    "FirstName": "Nerd",
                    "LastName": "McJones",
                    "NickName": "Ferris LeChat",
                    "DateBirthDay": "01/06/2003",
                    "Color": "Orange",
                    "DateStartCalc": "00/00/2019",
                    "DateEndCalc": "12/00/2019",
                    "TimeStartCalc": "03:00:00",
                    "TimeEndCalc": "04:00:00",
                    "FileCount": 0,
                    "CommentCount": 3
                },
                "Files": {
                    "CacheCreated": 1554407607,
                    "FileTop": null
                },
                "MyHistory": {}
            }
        ]
    }
}
```
