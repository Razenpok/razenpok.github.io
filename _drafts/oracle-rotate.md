---
layout: post
title: Rotating tables in Oracle
---

_"Hi David, I have a request for you. You see, we have this old table in Oracle which we want to display, erm, slightly different. Well, good luck!"_

Okay, let's see what we have here.

| ID |        PROP |       VAL |
|:---|:------------|:----------|
|  1 |        Name |      John |
|  1 |      Height |       170 |
|  1 |      Weight |        70 |
|  2 |        Name |      Mary |
|  2 | 1stEmployer | Microsoft |
|  2 |      Height |       175 |
|  3 |        Name |       Bob |
|  3 |      Weight |        90 |
|  3 | 1stEmployer |    Google |


<details>

<summary>SQL for generating such table</summary>

``` sql
CREATE TABLE obj (
  id number(6,0),
  prop varchar2(32),
  val varchar2(200),
  constraint pk_dept primary key (id, prop)
);

INSERT INTO obj VALUES (1, 'Name', 'John');
INSERT INTO obj VALUES (1, 'Height', '170');
INSERT INTO obj VALUES (1, 'Weight', '70');  
INSERT INTO obj VALUES (2, 'Name', 'Mary');  
INSERT INTO obj VALUES (2, '1stEmployer', 'Microsoft');
INSERT INTO obj VALUES (2, 'Height', '175');
INSERT INTO obj VALUES (3, 'Name', 'Bob');
INSERT INTO obj VALUES (3, 'Weight', '90');  
INSERT INTO obj VALUES (3, '1stEmployer', 'Google');
 ```

</details>


And they want...

| ID |  Name  |  Height  |  Weight  | 1stEmployer |
|:---|:-------|:---------|:---------|:------------|
|  1 |   John |      170 |       70 |             |
|  2 |   Mary |      175 |          |   Microsoft |
|  3 |    Bob |          |       90 |      Google |		

Whoa.

Okay,

<a name="joins"></a>
JOINS

``` sql
SELECT o.id, n.Name, h.Height, w.Weight, e."1stEmployer"
FROM (SELECT DISTINCT(id) FROM obj) o
LEFT JOIN (SELECT id, prop, val AS Name FROM obj) n
ON o.id = n.id AND n.prop = 'Name'
LEFT JOIN (SELECT id, prop, val AS Height FROM obj) h
ON o.id = h.id AND h.prop = 'Height'
LEFT JOIN (SELECT id, prop, val AS Weight FROM obj) w
ON o.id = w.id AND w.prop = 'Weight'
LEFT JOIN (SELECT id, prop, val AS "1stEmployer" FROM obj) e
ON o.id = e.id AND e.prop = '1stEmployer';
```

<a name="cases"></a>
CASE

``` sql
SELECT id
  ,MAX(CASE prop WHEN 'Name' THEN val END) Name
  ,MAX(CASE prop WHEN 'Height' THEN val END) Height
  ,MAX(CASE prop WHEN 'Weight' THEN val END) Weight
  ,MAX(CASE prop WHEN '1stEmployer' THEN val END) "1stEmployer"
FROM obj
GROUP BY id;
```

<a name="pivot"></a>
PIVOT

``` sql
SELECT *
FROM (SELECT id, prop, val FROM obj)
PIVOT (
  MAX(val)
  FOR prop IN ('Name', 'Height', 'Weight', '1stEmployer' as "1stEmployer")
);
```


Take a note about efficiency of this approach in sparse arrays of very different objects

Also explain pivot problem

TL;DR
 - [Joins](#joins)
 - [Cases](#cases)
 - [Pivot](#pivot)
