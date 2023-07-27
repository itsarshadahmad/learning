using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Delivery : MonoBehaviour
{
    bool hasPackage = false;
    [SerializeField] float destroyDelay = 0.5f;

    // Access color or represent color
    [SerializeField] Color32 packageColorOfCar = new Color32(1, 1, 1, 1);
    [SerializeField] Color32 defaultColorOfCar = new Color32(1, 1, 1, 1);

    // Access sprite which is rendered
    SpriteRenderer spriteRenderer;

    void Start()
    {
        // Get component of sprite or game object
        spriteRenderer = GetComponent<SpriteRenderer>();
    }

    // its called when your sprite collide with something
    void OnCollisionEnter2D(Collision2D other)
    {
        Debug.Log("Ken bumped into something");
    }

    void OnTriggerEnter2D(Collider2D other)
    {
        if (other.tag == "Package" && !hasPackage)
        {
            hasPackage = true;
            Debug.Log("Package picked up!");
            Destroy(other.gameObject, destroyDelay);
            spriteRenderer.color = packageColorOfCar;
        }
        if (other.tag == "Customer" && hasPackage)
        {
            hasPackage = false;
            Debug.Log("Delivery delivered!");
            spriteRenderer.color = defaultColorOfCar;
        }
    }
}
