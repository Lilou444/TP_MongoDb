1. db.getCollection('restaurants').find({})

2. db.getCollection('restaurants').find({},{_id:0,restaurant_id:1,borough:1,cuisine:1})

3. db.getCollection('restaurants').find({},{_id:0,restaurant_id:1,borough:1,cuisine:1})

4. db.getCollection('restaurants').find({},{_id:0,restaurant_id:1,name:1,borough:1,cuisine:1,"address.zipcode":1})

5. db.getCollection('restaurants').find({borough:"Bronx"},{})

6. db.getCollection('restaurants').find({borough: "Bronx"},{}).limit(5)

7. db.getCollection('restaurants').find({borough: "Bronx"},{}).skip(5).limit(5)

8. db.getCollection('restaurants').find({"grades.score":{$gt : 90}})

9. db.getCollection('restaurants').find({"grades.score":{$gt : 80,$lt: 100}})

10. db.getCollection('restaurants').find({"address.coord" : {$lt : -95.754168}})

11. db.getCollection('restaurants').find(  {
    "cuisine" : {$ne : "American "},
    "grades.score" :{$gt: 70},
    "address.coord" : {$lt : -65.754168}
   },{})


12. db.restaurants.find(
        {$and:
            [
                {"cuisine" : {$ne :"American "}},
                {"grades.score" : {$gt : 70}},
                {"address.coord" : {$lt : -65.754168}}
            ]
        }
    );13. db.restaurants.find( {
                "cuisine" : {$ne : "American "},
                "grades.grade" :"A",
                "borough": {$ne : "Brooklyn"}
            } 
    ).sort({"cuisine":-1});





14. db.restaurants.find(
{name: /^Wil/},
{
"restaurant_id" : 1,
"name":1,"borough":1,
"cuisine" :1
}
);

15. db.restaurants.find(
{name: /ces$/},
{
"restaurant_id" : 1,
"name":1,"borough":1,
"cuisine" :1
}
);

16.db.restaurants.find(
{"name": /.*Reg.*/},
{
"restaurant_id" : 1,
"name":1,"borough":1,
"cuisine" :1
}
);

17. db.restaurants.find(
{ 
"borough": "Bronx" , 
$or : [
{ "cuisine" : "American " },
{ "cuisine" : "Chinese" }
] 
} 
);


18. db.restaurants.find(
{"borough" :{$in :["Staten Island","Queens","Bronx","Brooklyn"]}},
{
"restaurant_id" : 1,
"name":1,"borough":1,
"cuisine" :1
}
);

19.db.restaurants.find(
{"borough" :{$nin :["Staten Island","Queens","Bronx","Brooklyn"]}},
{
"restaurant_id" : 1,
"name":1,"borough":1,
"cuisine" :1
}
);

20.db.restaurants.find(
{"grades.score" : 
{ $not: 
{$gt : 10}
}
},
{
"restaurant_id" : 1,
"name":1,"borough":1,
"cuisine" :1
}
);

21. db.restaurants.find(
{$or: [
  {name: /^Wil/}, 
  {"$and": [
       {"cuisine" : {$ne :"American "}}, 
       {"cuisine" : {$ne :"Chinees"}}
   ]}
]}
,{"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1}
);

22. db.restaurants.find( 
        {
          "grades.date": ISODate("2014-08-11T00:00:00Z"), 
          "grades.grade":"A" , 
          "grades.score" : 11
        }, 
    {"restaurant_id" : 1,"name":1,"grades":1}
);

23. db.restaurants.find( 
        { "grades.1.date": ISODate("2014-08-11T00:00:00Z"), 
            "grades.1.grade":"A" , 
            "grades.1.score" : 9
        }, 
        {"restaurant_id" : 1,"name":1,"grades":1}
);





24. db.restaurants.find( 
    { 
        "address.coord.1": {$gt : 42, $lte : 52}
    },
    {"restaurant_id" : 1,"name":1,"address":1,"coord":1}
);





