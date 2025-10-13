IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE TABLE [dbo].[AppUserTypes] (
        [Id] int NOT NULL IDENTITY,
        [Name_ar] nvarchar(max) NULL,
        [Name_en] nvarchar(max) NULL,
        [IsDeleted] bit NOT NULL,
        CONSTRAINT [PK_AppUserTypes] PRIMARY KEY ([Id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE TABLE [dbo].[AspNetRoles] (
        [Id] int NOT NULL IDENTITY,
        [Name] nvarchar(256) NULL,
        [NormalizedName] nvarchar(256) NULL,
        [ConcurrencyStamp] nvarchar(max) NULL,
        CONSTRAINT [PK_AspNetRoles] PRIMARY KEY ([Id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE TABLE [dbo].[AttendStatues] (
        [Id] int NOT NULL IDENTITY,
        [Name] nvarchar(max) NULL,
        [IsDeleted] bit NOT NULL,
        CONSTRAINT [PK_AttendStatues] PRIMARY KEY ([Id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE TABLE [dbo].[Families] (
        [Id] int NOT NULL IDENTITY,
        [Name] nvarchar(max) NULL,
        [IsDeleted] bit NOT NULL,
        CONSTRAINT [PK_Families] PRIMARY KEY ([Id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE TABLE [dbo].[Governorates] (
        [Id] int NOT NULL IDENTITY,
        [Name_ar] nvarchar(max) NULL,
        [Name_en] nvarchar(max) NULL,
        [IsDeleted] bit NOT NULL,
        CONSTRAINT [PK_Governorates] PRIMARY KEY ([Id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE TABLE [dbo].[IncomingAndOutgoings] (
        [Id] int NOT NULL IDENTITY,
        [Incoming] float NOT NULL,
        [Outgoing] float NOT NULL,
        [CreatedAt] datetime2 NOT NULL,
        [IsDeleted] bit NOT NULL,
        CONSTRAINT [PK_IncomingAndOutgoings] PRIMARY KEY ([Id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE TABLE [dbo].[Nationalities] (
        [Id] int NOT NULL IDENTITY,
        [Name] nvarchar(max) NULL,
        [IsDeleted] bit NOT NULL,
        CONSTRAINT [PK_Nationalities] PRIMARY KEY ([Id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE TABLE [dbo].[PayStatues] (
        [Id] int NOT NULL IDENTITY,
        [Name] nvarchar(max) NULL,
        [IsDeleted] bit NOT NULL,
        CONSTRAINT [PK_PayStatues] PRIMARY KEY ([Id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE TABLE [dbo].[Permissions] (
        [Id] int NOT NULL IDENTITY,
        [Name] nvarchar(max) NULL,
        [IsDeleted] bit NOT NULL,
        CONSTRAINT [PK_Permissions] PRIMARY KEY ([Id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE TABLE [dbo].[Qurans] (
        [Id] int NOT NULL IDENTITY,
        [Name] nvarchar(max) NULL,
        [nu] nvarchar(max) NULL,
        [IsDeleted] bit NOT NULL,
        CONSTRAINT [PK_Qurans] PRIMARY KEY ([Id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE TABLE [dbo].[SubscribeTypes] (
        [Id] int NOT NULL IDENTITY,
        [Name] nvarchar(max) NULL,
        [ArabSallaryPrice] float NOT NULL,
        [ForignSallaryPrice] float NOT NULL,
        [IsDeleted] bit NOT NULL,
        CONSTRAINT [PK_SubscribeTypes] PRIMARY KEY ([Id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE TABLE [dbo].[Times] (
        [Id] int NOT NULL IDENTITY,
        [Name] nvarchar(max) NULL,
        [IsDeleted] bit NOT NULL,
        CONSTRAINT [PK_Times] PRIMARY KEY ([Id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE TABLE [dbo].[AspNetUsers] (
        [Id] int NOT NULL IDENTITY,
        [FullName] nvarchar(max) NULL,
        [IsDeleted] bit NOT NULL,
        [IsPermanentlyDeleted] bit NOT NULL,
        [MobileNumber] nvarchar(max) NULL,
        [RegisterTime] datetime2 NOT NULL,
        [AppUserTypeId] int NULL,
        [UserName] nvarchar(256) NULL,
        [NormalizedUserName] nvarchar(256) NULL,
        [Email] nvarchar(256) NULL,
        [NormalizedEmail] nvarchar(256) NULL,
        [EmailConfirmed] bit NOT NULL,
        [PasswordHash] nvarchar(max) NULL,
        [SecurityStamp] nvarchar(max) NULL,
        [ConcurrencyStamp] nvarchar(max) NULL,
        [PhoneNumber] nvarchar(max) NULL,
        [PhoneNumberConfirmed] bit NOT NULL,
        [TwoFactorEnabled] bit NOT NULL,
        [LockoutEnd] datetimeoffset NULL,
        [LockoutEnabled] bit NOT NULL,
        [AccessFailedCount] int NOT NULL,
        CONSTRAINT [PK_AspNetUsers] PRIMARY KEY ([Id]),
        CONSTRAINT [FK_AspNetUsers_AppUserTypes_AppUserTypeId] FOREIGN KEY ([AppUserTypeId]) REFERENCES [dbo].[AppUserTypes] ([Id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE TABLE [dbo].[AspNetRoleClaims] (
        [Id] int NOT NULL IDENTITY,
        [RoleId] int NOT NULL,
        [ClaimType] nvarchar(max) NULL,
        [ClaimValue] nvarchar(max) NULL,
        CONSTRAINT [PK_AspNetRoleClaims] PRIMARY KEY ([Id]),
        CONSTRAINT [FK_AspNetRoleClaims_AspNetRoles_RoleId] FOREIGN KEY ([RoleId]) REFERENCES [dbo].[AspNetRoles] ([Id]) ON DELETE CASCADE
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE TABLE [dbo].[Subscribes] (
        [Id] int NOT NULL IDENTITY,
        [Name] nvarchar(max) NULL,
        [TotalMinutes] float NOT NULL,
        [PriceLE] float NOT NULL,
        [PriceDollar] float NOT NULL,
        [PriceReyal] float NOT NULL,
        [PhotoUrl] nvarchar(max) NULL,
        [SubscribeTypeId] int NOT NULL,
        [IsDeleted] bit NOT NULL,
        CONSTRAINT [PK_Subscribes] PRIMARY KEY ([Id]),
        CONSTRAINT [FK_Subscribes_SubscribeTypes_SubscribeTypeId] FOREIGN KEY ([SubscribeTypeId]) REFERENCES [dbo].[SubscribeTypes] ([Id]) ON DELETE CASCADE
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE TABLE [dbo].[Admin] (
        [Id] int NOT NULL,
        CONSTRAINT [PK_Admin] PRIMARY KEY ([Id]),
        CONSTRAINT [FK_Admin_AspNetUsers_Id] FOREIGN KEY ([Id]) REFERENCES [dbo].[AspNetUsers] ([Id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE TABLE [dbo].[AspNetUserClaims] (
        [Id] int NOT NULL IDENTITY,
        [UserId] int NOT NULL,
        [ClaimType] nvarchar(max) NULL,
        [ClaimValue] nvarchar(max) NULL,
        CONSTRAINT [PK_AspNetUserClaims] PRIMARY KEY ([Id]),
        CONSTRAINT [FK_AspNetUserClaims_AspNetUsers_UserId] FOREIGN KEY ([UserId]) REFERENCES [dbo].[AspNetUsers] ([Id]) ON DELETE CASCADE
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE TABLE [dbo].[AspNetUserLogins] (
        [LoginProvider] nvarchar(450) NOT NULL,
        [ProviderKey] nvarchar(450) NOT NULL,
        [ProviderDisplayName] nvarchar(max) NULL,
        [UserId] int NOT NULL,
        CONSTRAINT [PK_AspNetUserLogins] PRIMARY KEY ([LoginProvider], [ProviderKey]),
        CONSTRAINT [FK_AspNetUserLogins_AspNetUsers_UserId] FOREIGN KEY ([UserId]) REFERENCES [dbo].[AspNetUsers] ([Id]) ON DELETE CASCADE
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE TABLE [dbo].[AspNetUserRoles] (
        [UserId] int NOT NULL,
        [RoleId] int NOT NULL,
        CONSTRAINT [PK_AspNetUserRoles] PRIMARY KEY ([UserId], [RoleId]),
        CONSTRAINT [FK_AspNetUserRoles_AspNetRoles_RoleId] FOREIGN KEY ([RoleId]) REFERENCES [dbo].[AspNetRoles] ([Id]) ON DELETE CASCADE,
        CONSTRAINT [FK_AspNetUserRoles_AspNetUsers_UserId] FOREIGN KEY ([UserId]) REFERENCES [dbo].[AspNetUsers] ([Id]) ON DELETE CASCADE
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE TABLE [dbo].[AspNetUserTokens] (
        [UserId] int NOT NULL,
        [LoginProvider] nvarchar(450) NOT NULL,
        [Name] nvarchar(450) NOT NULL,
        [Value] nvarchar(max) NULL,
        CONSTRAINT [PK_AspNetUserTokens] PRIMARY KEY ([UserId], [LoginProvider], [Name]),
        CONSTRAINT [FK_AspNetUserTokens_AspNetUsers_UserId] FOREIGN KEY ([UserId]) REFERENCES [dbo].[AspNetUsers] ([Id]) ON DELETE CASCADE
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE TABLE [dbo].[Manager] (
        [Id] int NOT NULL,
        [CashMobile] nvarchar(max) NULL,
        CONSTRAINT [PK_Manager] PRIMARY KEY ([Id]),
        CONSTRAINT [FK_Manager_AspNetUsers_Id] FOREIGN KEY ([Id]) REFERENCES [dbo].[AspNetUsers] ([Id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE TABLE [dbo].[Teacher] (
        [Id] int NOT NULL,
        [CashMobile] nvarchar(max) NULL,
        [ForignTeacher] bit NOT NULL,
        [CircleId] int NULL,
        CONSTRAINT [PK_Teacher] PRIMARY KEY ([Id]),
        CONSTRAINT [FK_Teacher_AspNetUsers_Id] FOREIGN KEY ([Id]) REFERENCES [dbo].[AspNetUsers] ([Id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE TABLE [dbo].[UserPermissions] (
        [Id] int NOT NULL IDENTITY,
        [PermissionId] int NOT NULL,
        [UserId] int NOT NULL,
        [IsDeleted] bit NOT NULL,
        CONSTRAINT [PK_UserPermissions] PRIMARY KEY ([Id]),
        CONSTRAINT [FK_UserPermissions_AspNetUsers_UserId] FOREIGN KEY ([UserId]) REFERENCES [dbo].[AspNetUsers] ([Id]) ON DELETE CASCADE,
        CONSTRAINT [FK_UserPermissions_Permissions_PermissionId] FOREIGN KEY ([PermissionId]) REFERENCES [dbo].[Permissions] ([Id]) ON DELETE CASCADE
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE TABLE [dbo].[Circles] (
        [Id] int NOT NULL IDENTITY,
        [Name] nvarchar(max) NULL,
        [TeacherId] int NULL,
        [IsDeleted] bit NOT NULL,
        CONSTRAINT [PK_Circles] PRIMARY KEY ([Id]),
        CONSTRAINT [FK_Circles_Teacher_TeacherId] FOREIGN KEY ([TeacherId]) REFERENCES [dbo].[Teacher] ([Id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE TABLE [dbo].[ManagerTeachers] (
        [Id] int NOT NULL IDENTITY,
        [TeacherId] int NULL,
        [ManagerId] int NULL,
        [IsDeleted] bit NOT NULL,
        CONSTRAINT [PK_ManagerTeachers] PRIMARY KEY ([Id]),
        CONSTRAINT [FK_ManagerTeachers_Manager_ManagerId] FOREIGN KEY ([ManagerId]) REFERENCES [dbo].[Manager] ([Id]),
        CONSTRAINT [FK_ManagerTeachers_Teacher_TeacherId] FOREIGN KEY ([TeacherId]) REFERENCES [dbo].[Teacher] ([Id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE TABLE [dbo].[CircleTime] (
        [Id] int NOT NULL IDENTITY,
        [CircleId] int NULL,
        [TimeId] int NULL,
        [IsDeleted] bit NOT NULL,
        CONSTRAINT [PK_CircleTime] PRIMARY KEY ([Id]),
        CONSTRAINT [FK_CircleTime_Circles_CircleId] FOREIGN KEY ([CircleId]) REFERENCES [dbo].[Circles] ([Id]),
        CONSTRAINT [FK_CircleTime_Times_TimeId] FOREIGN KEY ([TimeId]) REFERENCES [dbo].[Times] ([Id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE TABLE [dbo].[ManagerCircles] (
        [Id] int NOT NULL IDENTITY,
        [CircleId] int NULL,
        [ManagerId] int NULL,
        [IsDeleted] bit NOT NULL,
        CONSTRAINT [PK_ManagerCircles] PRIMARY KEY ([Id]),
        CONSTRAINT [FK_ManagerCircles_Circles_CircleId] FOREIGN KEY ([CircleId]) REFERENCES [dbo].[Circles] ([Id]),
        CONSTRAINT [FK_ManagerCircles_Manager_ManagerId] FOREIGN KEY ([ManagerId]) REFERENCES [dbo].[Manager] ([Id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE TABLE [dbo].[Student] (
        [Id] int NOT NULL,
        [Age] int NULL,
        [NationalityId] int NULL,
        [GovernorateId] int NULL,
        [InsteadMobileNumber] nvarchar(max) NULL,
        [SubscribeId] int NULL,
        [TeacherId] int NULL,
        [ManagerId] int NULL,
        [CircleId] int NULL,
        [PayStatueId] int NULL,
        [FamilyId] int NULL,
        [FreeSubscribe] bit NOT NULL,
        [IsAccepted] bit NOT NULL,
        [SavedParts] int NULL,
        [SubscribeMinutes] float NULL,
        CONSTRAINT [PK_Student] PRIMARY KEY ([Id]),
        CONSTRAINT [FK_Student_AspNetUsers_Id] FOREIGN KEY ([Id]) REFERENCES [dbo].[AspNetUsers] ([Id]),
        CONSTRAINT [FK_Student_Circles_CircleId] FOREIGN KEY ([CircleId]) REFERENCES [dbo].[Circles] ([Id]),
        CONSTRAINT [FK_Student_Families_FamilyId] FOREIGN KEY ([FamilyId]) REFERENCES [dbo].[Families] ([Id]),
        CONSTRAINT [FK_Student_Governorates_GovernorateId] FOREIGN KEY ([GovernorateId]) REFERENCES [dbo].[Governorates] ([Id]),
        CONSTRAINT [FK_Student_Manager_ManagerId] FOREIGN KEY ([ManagerId]) REFERENCES [dbo].[Manager] ([Id]),
        CONSTRAINT [FK_Student_Nationalities_NationalityId] FOREIGN KEY ([NationalityId]) REFERENCES [dbo].[Nationalities] ([Id]),
        CONSTRAINT [FK_Student_PayStatues_PayStatueId] FOREIGN KEY ([PayStatueId]) REFERENCES [dbo].[PayStatues] ([Id]),
        CONSTRAINT [FK_Student_Subscribes_SubscribeId] FOREIGN KEY ([SubscribeId]) REFERENCES [dbo].[Subscribes] ([Id]),
        CONSTRAINT [FK_Student_Teacher_TeacherId] FOREIGN KEY ([TeacherId]) REFERENCES [dbo].[Teacher] ([Id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE TABLE [dbo].[Reports] (
        [Id] int NOT NULL IDENTITY,
        [Minutes] float NOT NULL,
        [NewId] int NULL,
        [NewFrom] int NOT NULL,
        [NewTo] int NOT NULL,
        [NewRate] nvarchar(max) NULL,
        [RecentPast] nvarchar(max) NULL,
        [RecentPastRate] nvarchar(max) NULL,
        [DistantPast] nvarchar(max) NULL,
        [DistantPastRate] nvarchar(max) NULL,
        [FarthestPast] nvarchar(max) NULL,
        [FarthestPastRate] nvarchar(max) NULL,
        [TheWordsQuranStranger] nvarchar(max) NULL,
        [Intonation] nvarchar(max) NULL,
        [Other] nvarchar(max) NULL,
        [CreationTime] datetime2 NOT NULL,
        [CircleId] int NULL,
        [StudentId] int NULL,
        [TeacherId] int NULL,
        [AttendStatueId] int NULL,
        [IsDeleted] bit NOT NULL,
        CONSTRAINT [PK_Reports] PRIMARY KEY ([Id]),
        CONSTRAINT [FK_Reports_AttendStatues_AttendStatueId] FOREIGN KEY ([AttendStatueId]) REFERENCES [dbo].[AttendStatues] ([Id]),
        CONSTRAINT [FK_Reports_Circles_CircleId] FOREIGN KEY ([CircleId]) REFERENCES [dbo].[Circles] ([Id]),
        CONSTRAINT [FK_Reports_Qurans_NewId] FOREIGN KEY ([NewId]) REFERENCES [dbo].[Qurans] ([Id]),
        CONSTRAINT [FK_Reports_Student_StudentId] FOREIGN KEY ([StudentId]) REFERENCES [dbo].[Student] ([Id]),
        CONSTRAINT [FK_Reports_Teacher_TeacherId] FOREIGN KEY ([TeacherId]) REFERENCES [dbo].[Teacher] ([Id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE INDEX [IX_AspNetRoleClaims_RoleId] ON [dbo].[AspNetRoleClaims] ([RoleId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    EXEC(N'CREATE UNIQUE INDEX [RoleNameIndex] ON [dbo].[AspNetRoles] ([NormalizedName]) WHERE [NormalizedName] IS NOT NULL');
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE INDEX [IX_AspNetUserClaims_UserId] ON [dbo].[AspNetUserClaims] ([UserId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE INDEX [IX_AspNetUserLogins_UserId] ON [dbo].[AspNetUserLogins] ([UserId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE INDEX [IX_AspNetUserRoles_RoleId] ON [dbo].[AspNetUserRoles] ([RoleId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE INDEX [EmailIndex] ON [dbo].[AspNetUsers] ([NormalizedEmail]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE INDEX [IX_AspNetUsers_AppUserTypeId] ON [dbo].[AspNetUsers] ([AppUserTypeId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    EXEC(N'CREATE UNIQUE INDEX [UserNameIndex] ON [dbo].[AspNetUsers] ([NormalizedUserName]) WHERE [NormalizedUserName] IS NOT NULL');
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    EXEC(N'CREATE UNIQUE INDEX [IX_Circles_TeacherId] ON [dbo].[Circles] ([TeacherId]) WHERE [TeacherId] IS NOT NULL');
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE INDEX [IX_CircleTime_CircleId] ON [dbo].[CircleTime] ([CircleId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE INDEX [IX_CircleTime_TimeId] ON [dbo].[CircleTime] ([TimeId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE INDEX [IX_ManagerCircles_CircleId] ON [dbo].[ManagerCircles] ([CircleId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE INDEX [IX_ManagerCircles_ManagerId] ON [dbo].[ManagerCircles] ([ManagerId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE INDEX [IX_ManagerTeachers_ManagerId] ON [dbo].[ManagerTeachers] ([ManagerId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE INDEX [IX_ManagerTeachers_TeacherId] ON [dbo].[ManagerTeachers] ([TeacherId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE INDEX [IX_Reports_AttendStatueId] ON [dbo].[Reports] ([AttendStatueId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE INDEX [IX_Reports_CircleId] ON [dbo].[Reports] ([CircleId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE INDEX [IX_Reports_NewId] ON [dbo].[Reports] ([NewId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE INDEX [IX_Reports_StudentId] ON [dbo].[Reports] ([StudentId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE INDEX [IX_Reports_TeacherId] ON [dbo].[Reports] ([TeacherId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE INDEX [IX_Student_CircleId] ON [dbo].[Student] ([CircleId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE INDEX [IX_Student_FamilyId] ON [dbo].[Student] ([FamilyId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE INDEX [IX_Student_GovernorateId] ON [dbo].[Student] ([GovernorateId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE INDEX [IX_Student_ManagerId] ON [dbo].[Student] ([ManagerId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE INDEX [IX_Student_NationalityId] ON [dbo].[Student] ([NationalityId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE INDEX [IX_Student_PayStatueId] ON [dbo].[Student] ([PayStatueId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE INDEX [IX_Student_SubscribeId] ON [dbo].[Student] ([SubscribeId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE INDEX [IX_Student_TeacherId] ON [dbo].[Student] ([TeacherId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE INDEX [IX_Subscribes_SubscribeTypeId] ON [dbo].[Subscribes] ([SubscribeTypeId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE INDEX [IX_UserPermissions_PermissionId] ON [dbo].[UserPermissions] ([PermissionId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    CREATE INDEX [IX_UserPermissions_UserId] ON [dbo].[UserPermissions] ([UserId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240228225534_init')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20240228225534_init', N'6.0.10');
END;
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240404221432_timeCircle')
BEGIN
    ALTER TABLE [dbo].[CircleTime] DROP CONSTRAINT [FK_CircleTime_Circles_CircleId];
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240404221432_timeCircle')
BEGIN
    ALTER TABLE [dbo].[CircleTime] DROP CONSTRAINT [FK_CircleTime_Times_TimeId];
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240404221432_timeCircle')
BEGIN
    ALTER TABLE [dbo].[CircleTime] DROP CONSTRAINT [PK_CircleTime];
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240404221432_timeCircle')
BEGIN
    EXEC sp_rename N'[dbo].[CircleTime]', N'CircleTimes';
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240404221432_timeCircle')
BEGIN
    EXEC sp_rename N'[dbo].[CircleTimes].[IX_CircleTime_TimeId]', N'IX_CircleTimes_TimeId', N'INDEX';
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240404221432_timeCircle')
BEGIN
    EXEC sp_rename N'[dbo].[CircleTimes].[IX_CircleTime_CircleId]', N'IX_CircleTimes_CircleId', N'INDEX';
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240404221432_timeCircle')
BEGIN
    ALTER TABLE [dbo].[CircleTimes] ADD CONSTRAINT [PK_CircleTimes] PRIMARY KEY ([Id]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240404221432_timeCircle')
BEGIN
    ALTER TABLE [dbo].[CircleTimes] ADD CONSTRAINT [FK_CircleTimes_Circles_CircleId] FOREIGN KEY ([CircleId]) REFERENCES [dbo].[Circles] ([Id]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240404221432_timeCircle')
BEGIN
    ALTER TABLE [dbo].[CircleTimes] ADD CONSTRAINT [FK_CircleTimes_Times_TimeId] FOREIGN KEY ([TimeId]) REFERENCES [dbo].[Times] ([Id]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240404221432_timeCircle')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20240404221432_timeCircle', N'6.0.10');
END;
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240406200947_IsPermanentlyDeleted')
BEGIN
    ALTER TABLE [dbo].[UserPermissions] ADD [IsPermanentlyDeleted] bit NOT NULL DEFAULT CAST(0 AS bit);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240406200947_IsPermanentlyDeleted')
BEGIN
    ALTER TABLE [dbo].[Times] ADD [IsPermanentlyDeleted] bit NOT NULL DEFAULT CAST(0 AS bit);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240406200947_IsPermanentlyDeleted')
BEGIN
    ALTER TABLE [dbo].[SubscribeTypes] ADD [IsPermanentlyDeleted] bit NOT NULL DEFAULT CAST(0 AS bit);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240406200947_IsPermanentlyDeleted')
BEGIN
    ALTER TABLE [dbo].[Subscribes] ADD [IsPermanentlyDeleted] bit NOT NULL DEFAULT CAST(0 AS bit);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240406200947_IsPermanentlyDeleted')
BEGIN
    ALTER TABLE [dbo].[Reports] ADD [IsPermanentlyDeleted] bit NOT NULL DEFAULT CAST(0 AS bit);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240406200947_IsPermanentlyDeleted')
BEGIN
    ALTER TABLE [dbo].[Qurans] ADD [IsPermanentlyDeleted] bit NOT NULL DEFAULT CAST(0 AS bit);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240406200947_IsPermanentlyDeleted')
BEGIN
    ALTER TABLE [dbo].[Permissions] ADD [IsPermanentlyDeleted] bit NOT NULL DEFAULT CAST(0 AS bit);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240406200947_IsPermanentlyDeleted')
BEGIN
    ALTER TABLE [dbo].[PayStatues] ADD [IsPermanentlyDeleted] bit NOT NULL DEFAULT CAST(0 AS bit);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240406200947_IsPermanentlyDeleted')
BEGIN
    ALTER TABLE [dbo].[Nationalities] ADD [IsPermanentlyDeleted] bit NOT NULL DEFAULT CAST(0 AS bit);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240406200947_IsPermanentlyDeleted')
BEGIN
    ALTER TABLE [dbo].[ManagerTeachers] ADD [IsPermanentlyDeleted] bit NOT NULL DEFAULT CAST(0 AS bit);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240406200947_IsPermanentlyDeleted')
BEGIN
    ALTER TABLE [dbo].[ManagerCircles] ADD [IsPermanentlyDeleted] bit NOT NULL DEFAULT CAST(0 AS bit);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240406200947_IsPermanentlyDeleted')
BEGIN
    ALTER TABLE [dbo].[IncomingAndOutgoings] ADD [IsPermanentlyDeleted] bit NOT NULL DEFAULT CAST(0 AS bit);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240406200947_IsPermanentlyDeleted')
BEGIN
    ALTER TABLE [dbo].[Governorates] ADD [IsPermanentlyDeleted] bit NOT NULL DEFAULT CAST(0 AS bit);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240406200947_IsPermanentlyDeleted')
BEGIN
    ALTER TABLE [dbo].[Families] ADD [IsPermanentlyDeleted] bit NOT NULL DEFAULT CAST(0 AS bit);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240406200947_IsPermanentlyDeleted')
BEGIN
    ALTER TABLE [dbo].[CircleTimes] ADD [IsPermanentlyDeleted] bit NOT NULL DEFAULT CAST(0 AS bit);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240406200947_IsPermanentlyDeleted')
BEGIN
    ALTER TABLE [dbo].[Circles] ADD [IsPermanentlyDeleted] bit NOT NULL DEFAULT CAST(0 AS bit);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240406200947_IsPermanentlyDeleted')
BEGIN
    ALTER TABLE [dbo].[AttendStatues] ADD [IsPermanentlyDeleted] bit NOT NULL DEFAULT CAST(0 AS bit);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240406200947_IsPermanentlyDeleted')
BEGIN
    ALTER TABLE [dbo].[AppUserTypes] ADD [IsPermanentlyDeleted] bit NOT NULL DEFAULT CAST(0 AS bit);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240406200947_IsPermanentlyDeleted')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20240406200947_IsPermanentlyDeleted', N'6.0.10');
END;
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240406203027_relations')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20240406203027_relations', N'6.0.10');
END;
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240415101710_expiry')
BEGIN
    ALTER TABLE [dbo].[Student] ADD [SubscribeExpiry] datetime2 NULL;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240415101710_expiry')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20240415101710_expiry', N'6.0.10');
END;
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240415104246_editprop')
BEGIN
    EXEC sp_rename N'[dbo].[IncomingAndOutgoings].[CreatedAt]', N'Date', N'COLUMN';
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240415104246_editprop')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20240415104246_editprop', N'6.0.10');
END;
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240420101301_ProfilePhoto')
BEGIN
    EXEC sp_rename N'[dbo].[IncomingAndOutgoings].[Incoming]', N'IncomingInUSD', N'COLUMN';
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240420101301_ProfilePhoto')
BEGIN
    ALTER TABLE [dbo].[IncomingAndOutgoings] ADD [IncomingInEGP] float NOT NULL DEFAULT 0.0E0;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240420101301_ProfilePhoto')
BEGIN
    ALTER TABLE [dbo].[AspNetUsers] ADD [PhotoUrl] nvarchar(max) NULL;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240420101301_ProfilePhoto')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20240420101301_ProfilePhoto', N'6.0.10');
END;
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240526072850_deletrel')
BEGIN
    DROP INDEX [IX_Circles_TeacherId] ON [dbo].[Circles];
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240526072850_deletrel')
BEGIN
    DECLARE @var0 sysname;
    SELECT @var0 = [d].[name]
    FROM [sys].[default_constraints] [d]
    INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
    WHERE ([d].[parent_object_id] = OBJECT_ID(N'[dbo].[Teacher]') AND [c].[name] = N'CircleId');
    IF @var0 IS NOT NULL EXEC(N'ALTER TABLE [dbo].[Teacher] DROP CONSTRAINT [' + @var0 + '];');
    ALTER TABLE [dbo].[Teacher] DROP COLUMN [CircleId];
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240526072850_deletrel')
BEGIN
    CREATE INDEX [IX_Circles_TeacherId] ON [dbo].[Circles] ([TeacherId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240526072850_deletrel')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20240526072850_deletrel', N'6.0.10');
END;
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240902111723_sar')
BEGIN
    DROP INDEX [IX_Circles_TeacherId] ON [dbo].[Circles];
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240902111723_sar')
BEGIN
    ALTER TABLE [dbo].[IncomingAndOutgoings] ADD [IncomingInSAR] float NOT NULL DEFAULT 0.0E0;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240902111723_sar')
BEGIN
    EXEC(N'CREATE UNIQUE INDEX [IX_Circles_TeacherId] ON [dbo].[Circles] ([TeacherId]) WHERE [TeacherId] IS NOT NULL');
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20240902111723_sar')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20240902111723_sar', N'6.0.10');
END;
GO

COMMIT;
GO

