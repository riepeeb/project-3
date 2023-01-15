
create table yr_visitors (
year int primary key,
recreationvisitors bigint
 );

create table sum_visitors (
year int, 
month varchar,
recreationvisitors bigint,
nonrecreationvisitors int,
recreationhours bigint,
nonrecreationhours bigint,	
tentcampers int,
rvcampers int,
totalovernightstays int
);

	

create table lodge_ovn (
year int primary key,
concessionerlodgers int,
concessionercampers int,
tentcampers int,
rvcampers int,
backcountrycampers int,
miscellaneouscampers int
)
 