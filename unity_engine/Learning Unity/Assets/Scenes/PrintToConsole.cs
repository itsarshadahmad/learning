using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PrintToConsole : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        // Debug.Log("Hello World Of Game development.");
        string pattern = "";
        for (int i = 0; i < 5; i++)
        {
            for (int j = 0; j <= i; j++)
            {
                pattern += "*";
            }
            pattern += "\n";
        }

        Debug.Log(pattern);
    }

    // Update is called once per frame
    void Update()
    {

    }
}
