﻿namespace aspnetserver
{
    public class TEMPLocalUserRepo
    {
        public static List<UserAuth> Users = new()
        {
            new()
            {
                
                Password = "4321",
                EmailAddress = "temp@temp.org",
                GivenName = "Tempname",
                Surname = "Tempsurname",
                Role = "1"
            }
        };
    }
}