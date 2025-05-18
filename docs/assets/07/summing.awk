# This is an awk program that summarizes a coin collection.
/gold/    { num_gold++; wt_gold += $2 }                           # Get weight of gold.
/silver/  { num_silver++; wt_silver += $2 }                       # Get weight of silver.
END {
    val_gold = 485 * wt_gold;                                     # Compute value of gold.
    val_silver = 16 * wt_silver;                                  # Compute value of silver. 
    total = val_gold + val_silver;

    print "Summary data for coin collection:";
    printf("\n");                                                 # Skips to the next line.
    printf("    Gold pieces:\t\t%4i\n", num_gold);
    printf("    Weight of gold pieces:\t%7.2f\n", wt_gold);
    printf("    Value of gold pieces:\t%7.2f\n", val_gold);
    printf("\n");
    printf("    Silver pieces:\t\t%4i\n", num_silver);
    printf("    Weight of silver pieces:\t%7.2f\n", wt_silver);
    printf("    Value of silver pieces:\t%7.2f\n", val_silver);
    printf("\n");
    printf("    Total number of pieces:\t%4i\n", NR);
    printf("    Value of collection:\t%7.2f\n", total);
}

