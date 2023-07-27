using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Driver : MonoBehaviour
{
    [SerializeField] float steerSpeed = 1f;

    // SerializeField is example of an attribute. When square braces added to method,
    // variable, or class represent we adding attribute to thing following it.
    // This allow to access field in inspector
    [SerializeField] float moveSpeed = 20f;

    [SerializeField] float slowSpeed = 15f;
    [SerializeField] float boostSpeed = 30f;

    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        // steerSpeed is used to increase & decrease rotation speed
        float steerAmount = Input.GetAxis("Horizontal") * steerSpeed * Time.deltaTime;
        float moveAmount = Input.GetAxis("Vertical") * moveSpeed * Time.deltaTime;

        // accessing transform component to rotate object 
        // -steerAmount is used to make control right
        // left arrow -> -ve value & right arrow -> +ve value
        // (--) => + to turn left, (+) => - to turn right
        transform.Rotate(0, 0, -steerAmount);

        // move character forward
        transform.Translate(0, moveAmount, 0);
    }

    private void OnTriggerEnter2D(Collider2D other)
    {
        if (other.tag == "Booster")
        {
            moveSpeed = boostSpeed;
        }
    }

    private void OnCollisionEnter2D(Collision2D other)
    {
        moveSpeed = slowSpeed;
    }
}
