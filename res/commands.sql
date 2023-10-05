CREATE TABLE Activities (
    ActivityId int IDENTITY(1,1) PRIMARY KEY,
    Activity nvarchar(255) NOT NULL,
    Accessibility float,
    [Type] nvarchar(255),
	Participants int,
	Price decimal,
	[Key] nvarchar(255),
	Link nvarchar(MAX),
	CreatedAt datetime2
);

SELECT * FROM Activities WHERE Activity LIKE '%Clean out your refrigerator%';

SELECT * FROM dbo.Activities WHERE Activity = 'Clean out your refrigerator';

-- N.B. Incorrect syntax
--BEGIN
--INSERT INTO dbo.Activities(Activity,Accessibility,[Type],Participants,Price,[Key],Link)
--VALUES(@activity,@accessibility,@type,@participants,@price,@key,@link)
--WHERE NOT EXISTS (SELECT * FROM dbo.Activities WHERE Activity = @activity);
--END

-- N.B. Correct syntax
IF NOT EXISTS (SELECT * FROM dbo.Activities WHERE Activity = @activity) 
BEGIN
INSERT INTO dbo.Activities(Activity,Accessibility,[Type],Participants,Price,[Key],Link,CreatedAt)
VALUES(@activity,@accessibility,@type,@participants,@price,@key,@link,@createdat)
END

INSERT INTO dbo.Activities(Activity, Accessibility, [Type], Participants, Price, [Key])
VALUES('test',0.1,'{proposal.Type}',1,9.99,'12345')

--DELETE FROM dbo.Activities;

SELECT * FROM dbo.Activities ORDER BY Accessibility ASC, Participants ASC;

SELECT COUNT(*) FROM dbo.Activities

SELECT DISTINCT([Type]) FROM dbo.Activities

UPDATE dbo.Activities
SET [Link] = ''
WHERE [Link] IS NULL